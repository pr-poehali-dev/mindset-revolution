import { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const nodeCount = 30;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const nodeElements = nodes.map((node, index) => {
      const el = document.createElement('div');
      el.className = 'neural-node';
      el.style.left = `${node.x}%`;
      el.style.top = `${node.y}%`;
      el.style.animationDelay = `${index * 0.5}s`;
      canvasRef.current?.appendChild(el);
      return el;
    });

    const lines: HTMLDivElement[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        
        if (distance < 25) {
          const line = document.createElement('div');
          line.className = 'neural-line';
          const angle = Math.atan2(nodes[j].y - nodes[i].y, nodes[j].x - nodes[i].x);
          line.style.left = `${nodes[i].x}%`;
          line.style.top = `${nodes[i].y}%`;
          line.style.width = `${distance}%`;
          line.style.transform = `rotate(${angle}rad)`;
          line.style.animationDelay = `${(i + j) * 0.2}s`;
          canvasRef.current?.appendChild(line);
          lines.push(line);
        }
      }
    }

    let animationFrame: number;
    const animate = () => {
      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > 100) node.vx *= -1;
        if (node.y < 0 || node.y > 100) node.vy *= -1;

        if (nodeElements[index]) {
          nodeElements[index].style.left = `${node.x}%`;
          nodeElements[index].style.top = `${node.y}%`;
        }
      });

      let lineIndex = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
          );
          
          if (distance < 25 && lines[lineIndex]) {
            const angle = Math.atan2(nodes[j].y - nodes[i].y, nodes[j].x - nodes[i].x);
            lines[lineIndex].style.left = `${nodes[i].x}%`;
            lines[lineIndex].style.top = `${nodes[i].y}%`;
            lines[lineIndex].style.width = `${distance}%`;
            lines[lineIndex].style.transform = `rotate(${angle}rad)`;
            lines[lineIndex].style.opacity = `${Math.max(0, (25 - distance) / 25) * 0.4}`;
          }
          lineIndex++;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      nodeElements.forEach(el => el.remove());
      lines.forEach(line => line.remove());
    };
  }, []);

  return <div ref={canvasRef} className="neural-bg" />;
};

export default NeuralBackground;
