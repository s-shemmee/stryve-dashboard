const BackgroundShapes = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
    <div className="absolute w-24 h-48 bg-teal-900 top-8 left-8 opacity-80 shape-tl"></div>
    <div className="absolute w-24 h-48 bottom-8 left-8 bg-amber-400 opacity-80 shape-bl"></div>
    <div className="absolute w-24 h-48 bg-teal-200 bottom-8 right-8 opacity-80 shape-br"></div>
    <div className="absolute w-24 h-48 bg-pink-500 top-8 right-8 opacity-80 shape-tr"></div>
  </div>
);

export default BackgroundShapes;
