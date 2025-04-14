import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements AfterViewInit {
  userName = '';

  ngAfterViewInit(): void {
    this.drawCardWithoutText();
  }

  drawCardWithoutText() {
    const canvas = document.getElementById('cardCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const background = new Image();
    background.src = 'assets/images/tanami.jpg';
    background.onload = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      ctx!.drawImage(background, 0, 0, canvas.width, canvas.height);

      // لو عايز تعرض الاسم مباشرة:
      if (this.userName) {
        this.drawTextOnCanvas(ctx!, canvas.width, canvas.height);
      }
    };
  }

  generateCard() {
    const canvas = document.getElementById('cardCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const background = new Image();
    background.src = 'assets/images/tanami.jpg';

    background.onload = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      ctx!.drawImage(background, 0, 0, canvas.width, canvas.height);

      this.drawTextOnCanvas(ctx!, canvas.width, canvas.height);

      // ثم نحمل الصورة بالحجم الكبير
      this.downloadHighResImage();
    };
  }

  drawTextOnCanvas(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    ctx.fillStyle = 'white';
    const fontSize = Math.floor(width * 0.045);
    ctx.font = `${fontSize}px BahijTheSansArabic`;
    ctx.textAlign = 'right';

    const x = width - 125; // الهامش من اليمين
    const y = height * 0.79;

    const maxWidth = width * 0.5; // أقصى عرض للسطر (نصف الصورة تقريبًا)
    const lineHeight = fontSize + 10;

    this.wrapText(ctx, this.userName, x, y, maxWidth, lineHeight);
  }
  wrapText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) {
    const words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  downloadHighResImage() {
    // إنشاء كانفاس مخفي كبير للتحميل فقط
    const downloadCanvas = document.createElement('canvas');
    const width = 1080;
    const height = 1080;
    downloadCanvas.width = width;
    downloadCanvas.height = height;

    const ctx = downloadCanvas.getContext('2d');
    const background = new Image();
    background.src = 'assets/images/tanami.jpg';

    background.onload = () => {
      ctx!.drawImage(background, 0, 0, width, height);

      this.drawTextOnCanvas(ctx!, width, height);
      const link = document.createElement('a');
      link.download = 'tanami_card.png';
      link.href = downloadCanvas.toDataURL('image/png');
      link.click();
    };
  }
}
