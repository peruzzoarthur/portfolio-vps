export const LayoutWithBars = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      {/* Left bar */}
      <div className="hidden md:block md:w-1/12 h-full"></div>
      
      {/* Main content */}
      <div className="flex-1 w-full max-w-3xl px-4 md:px-0">
        {children}
      </div>
      
      {/* Right bar */}
      <div className="hidden md:block md:w-1/12 h-full"></div>
    </div>
  );
};

