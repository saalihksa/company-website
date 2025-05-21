# EmlakPlus - Gayrimenkul Kurumsal Websitesi

EmlakPlus, modern bir gayrimenkul ve emlak şirketi için tasarlanmış kurumsal bir web sitesidir. Next.js ve React ile geliştirilmiş olup SEO dostu ve modern bir arayüze sahiptir.

## Özellikler

- SEO dostu yapı
- Responsive tasarım
- Modern ve şık arayüz
- Performans odaklı mimari
- Türkçe içerik

## Kullanılan Teknolojiler

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Next-Sitemap](https://www.npmjs.com/package/next-sitemap)

## Başlangıç

### Gereksinimler

- Node.js 18.0.0 veya üstü
- npm veya yarn

### Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/username/emlak-website.git
cd emlak-website
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
```

4. Tarayıcınızda http://localhost:3000 adresine gidin.

### Derleme ve Dağıtım

Projeyi derlemek için:
```bash
npm run build
# veya
yarn build
```

Derlenmiş versiyonu çalıştırmak için:
```bash
npm run start
# veya
yarn start
```

## Proje Yapısı

```
emlak-website/
├── public/
│   └── images/       # Görseller
├── src/
│   ├── app/          # Next.js App Router sayfaları
│   ├── components/   # React bileşenleri
│   │   ├── home/     # Ana sayfa bileşenleri
│   │   ├── layout/   # Layout bileşenleri
│   │   ├── properties/ # Gayrimenkul bileşenleri
│   │   └── ui/       # UI bileşenleri
│   ├── hooks/        # React hooks
│   ├── lib/          # Yardımcı kütüphaneler
│   └── utils/        # Yardımcı fonksiyonlar
├── .gitignore
├── next.config.ts
├── next-sitemap.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

## İletişim

Herhangi bir soru veya geri bildirim için lütfen info@emlakplus.com adresine e-posta gönderin.
