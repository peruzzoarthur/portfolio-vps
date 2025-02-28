import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { LocalOnlyGuard } from 'src/guards/local-only.guard';
import { ApiBody, ApiResponse, ApiConsumes } from '@nestjs/swagger';
import { Tag } from '@prisma/client';
import { MarkdownFileInterceptor } from 'src/interceptors/markdown-file.interceptor';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 400,
    description: 'Bad requests.',
    examples: {
      ['No md']: {
        value: {
          message: 'Markdown file is required.',
          error: 'Bad Request',
          statusCode: 400,
        },
        summary: 'No MD file',
      },
      ['Bad tag']: {
        value: {
          statusCode: 400,
          message: 'Tag PHP does not exist.',
        },
        summary: 'Bad tag',
      },
    },
  })
  @ApiResponse({ status: 404, description: 'No authors found with ids: x, y.' })
  @UseGuards(LocalOnlyGuard)
  // @UseInterceptors(FileInterceptor("file", {}))
  @UseInterceptors(new MarkdownFileInterceptor('file'))
  async create(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Markdown file is required.');
    }

    this.validateFile(file);

    const content = file.buffer.toString('utf-8');
    const seriesId = createPostDto.seriesId;
    const title = createPostDto.title;
    const abstract = createPostDto.abstract;
    const imagesPath = createPostDto.imagesPath;
    const authorsIds = createPostDto.authorsIds;
    const tags = createPostDto.tags;
    const slug = createPostDto.slug;

    const tagElements = tags.split(',').map((item) => item.trim());

    for (const tag of tagElements) {
      if (!Tag[tag]) {
        throw new HttpException(
          `Tag ${tag} does not exist.`,
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const { updatedContent, images } = this.postsService.extractFromMd(
      content,
      imagesPath,
    );

    return this.postsService.create({
      seriesId: seriesId,
      title: title,
      abstract: abstract,
      authorsIds: authorsIds,
      content: updatedContent,
      images: images,
      tags: tags,
      imagesPath: imagesPath,
      slug: slug,
    });
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('used-tags')
  findUsedTags() {
    return this.postsService.findUsedTags();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseGuards(LocalOnlyGuard)
  // @UseInterceptors(FileInterceptor('file', {}))
  @UseInterceptors(new MarkdownFileInterceptor('file'))
  @ApiBody({ type: UpdatePostDto })
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const seriesId = updatePostDto.seriesId;
    const title = updatePostDto.title;
    const abstract = updatePostDto.abstract;
    const imagesPath = updatePostDto.imagesPath;
    const authorsIds = updatePostDto.authorsIds;
    const tags = updatePostDto.tags;

    if (file) {
      this.validateFile(file);

      // Process file content and extract md with images ref
      const content = file.buffer.toString('utf-8');
      const { updatedContent, images } = this.postsService.extractFromMd(
        content,
        imagesPath,
      );

      // Update post with content and images
      return this.postsService.update(+id, {
        seriesId: seriesId,
        imagesPath: imagesPath,
        authorsIds: authorsIds,
        abstract: abstract,
        images: images,
        content: updatedContent,
        title: title,
        tags: tags,
      });
    }

    // Update post without file
    return this.postsService.update(+id, {
      seriesId: seriesId,
      imagesPath: imagesPath,
      authorsIds: authorsIds,
      abstract: abstract,
      images: undefined,
      content: undefined,
      title: title,
      tags: tags,
    });
  }

  @Delete(':id')
  @UseGuards(LocalOnlyGuard)
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }

  private validateFile(file: Express.Multer.File) {
    if (!file.mimetype.includes('markdown')) {
      throw new HttpException(
        'Only .md files are allowed.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const allowedExtensions = ['.md'];
    const fileExtension = file.originalname.split('.').pop();
    if (!allowedExtensions.includes(`.${fileExtension}`)) {
      throw new HttpException(
        'Only .md files are allowed.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new HttpException(
        'File size exceeds the 5MB limit.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
