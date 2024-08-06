"use client";

import { useState } from "react";

const SimpleSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SimpleSlider;



/*   const carrouelPics = [
    {id: 1, src: "https://scontent.cdninstagram.com/v/t51.29350-15/453548476_1886936028494552_5541380364082438102_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=wa1Y13TeI0MQ7kNvgHRnae_&gid=80c8ce97cbc3468b8edd60bcef980415&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQyMzYyNjA0NTg4MzUwOTE1NjQ3NzA3MDg3ODI2NzIyOA%3D%3D.2-ccb7-5&oh=00_AYBIVfrJ8hhBhTt2YHpWcXki-5NGbQreZnZPt-1sMsiWWg&oe=66B689C3&_nc_sid=10d13b", alt: "new 1"},
    {id: 2, src: "https://instagram.fvlc7-1.fna.fbcdn.net/v/t39.30808-6/453589765_1013979000083492_7591266563483101751_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fvlc7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=miTPgQnX-ZQQ7kNvgElaGHC&gid=86ac5dc6d10241259068fb3bed8f7d47&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQyNDkzNTM5NjM4NTE3NDQ1OQ%3D%3D.2-ccb7-5&oh=00_AYBZccCIg3ehFCrI4-2bbDgzo5V-L7HW6pxvNzaB_yjqEQ&oe=66B69DB2&_nc_sid=8f1549", alt: "new 2"},
    {id: 3, src: "https://scontent.cdninstagram.com/v/t51.29350-15/454155126_896121379020749_6699065941852137491_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=Ggkr4MtOPr0Q7kNvgGFjZP_&gid=80c8ce97cbc3468b8edd60bcef980415&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQyNzA5ODg2OTk4NzM0NjgwNTk0Mjc1MzgxNzg2NjMzNg%3D%3D.2-ccb7-5&oh=00_AYD1oFctuFC6pA2u4Bt-Rh50SB8dB44klaIfEBfNU9VEeg&oe=66B6705F&_nc_sid=10d13b", alt: "new 3"},
  ]
   */