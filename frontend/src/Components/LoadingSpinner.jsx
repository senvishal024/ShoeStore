function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-14 h-14 border-4 border-[#D7C7AE] border-t-[#4E220F] rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;