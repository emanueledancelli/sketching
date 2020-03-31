// happy drawing

const sketch = p => {
  p.setup = () => {
    // setup
    p.createCanvas(640, 640);
  };

  p.draw = () => {
    // draw
    p.background(255);
  };
};

export default sketch;
