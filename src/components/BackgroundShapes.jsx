const BackgroundShapes = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
    <div className="absolute top-8 left-8 w-48 h-96 bg-teal-900 opacity-80 shape-tl"></div>
    <div className="absolute bottom-8 left-8 w-48 h-96 bg-amber-400 opacity-80 shape-bl"></div>
    <div className="absolute bottom-8 right-8 w-48 h-96 bg-teal-200 opacity-80 shape-br"></div>
    <div className="absolute top-8 right-8 w-48 h-96 bg-pink-500 opacity-80 shape-tr"></div>
  </div>
);

export default BackgroundShapes;
