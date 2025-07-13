> **For English Version Please click here**: [English Version](#english-version)

# আহসান পার্সোনাল পোর্টফোলিও ওয়েবসাইট

একটি আধুনিক ও রেস্পন্সিভ পোর্টফোলিও ওয়েবসাইট যা মাহমুদুল ইসলামের দক্ষতা, অভিজ্ঞতা ও প্রকল্পগুলো তুলে ধরবে। React, Vite ও Tailwind CSS ব্যবহার করে তৈরি, যা পরিষ্কার ডিজাইন, মসৃণ অ্যানিমেশন ও মডুলার আর্কিটেকচার দিয়ে নিয়োগকর্তাদের উপর দীর্ঘস্থায়ী ছাপ ফেলে।

---

## বিষয়সূচি

1. [ডেমো](#ডেমো)
2. [ফিচারসমূহ](#ফিচারসমূহ)
3. [প্রযুক্তি স্ট্যাক](#প্রযুক্তি-স্ট্যাক)
4. [প্রোজেক্ট স্ট্রাকচার](#প্রোজেক্ট-স্ট্রাকচার)
5. [ইনস্টলেশন ও সেটআপ](#ইনস্টলেশন-ও-সেটআপ)
6. [উপলব্ধ স্ক্রিপ্টসমূহ](#উপলব্ধ-স্ক্রিপ্টসমূহ)
7. [ব্যবহার](#ব্যবহার)
8. [ডেপ্লয়মেন্ট](#ডেপ্লয়মেন্ট)
9. [কোড কোয়ালিটি ও লিন্টিং](#কোড-কোয়ালিটি-ও-লিন্টিং)
10. [কন্ট্রিবিউটিং](#কন্ট্রিবিউটিং)
11. [লাইসেন্স](#লাইসেন্স)
12. [যোগাযোগ](#যোগাযোগ)

---

## ডেমো

> **লাইভ প্রিভিউ:** [https://hshoaib.me/](https://hshoaib.me/)

![হোমপেইজের স্ক্রিনশট](<./public/Screenshot%20(81).png>)

---

## ফিচারসমূহ

- **রেস্পন্সিভ ডিজাইন:** সব ধরনের ডিভাইসে নির্বিঘ্ন অভিজ্ঞতা।
- **মসৃণ অ্যানিমেশন:** AOS লাইব্রেরির মাধ্যমে স্ক্রল-ট্রিগার্ড অ্যানিমেশন।
- **ইন্টারেক্টিভ কম্পোনেন্টস:** Swiper স্লাইডার দিয়ে ফিচার্ড প্রকল্প প্রদর্শন।
- **মডুলার আর্কিটেকচার:** Navbar, Feature, Experiences, Publication, Consultation Form ও Footer এর মতো পুনঃব্যবহারযোগ্য React কম্পোনেন্টস।
- **ডার্ক ও লাইট মোড (ঐচ্ছিক):** সহজেই থিমিং এক্সটেনশন করার সুবিধা।

---

## প্রযুক্তি স্ট্যাক

- **ফ্রেমওয়ার্ক:** React 19
- **বিল্ড টুল:** Vite 6
- **স্টাইলিং:** Tailwind CSS 4, @material-tailwind/react
- **অ্যানিমেশন:** AOS (Animate On Scroll)
- **ক্যারোসেল:** Swiper 11
- **লিন্টিং:** ESLint (`@eslint/js`, `eslint-plugin-react-hooks`)
- **ভার্সন কন্ট্রোল:** Git

---

## প্রোজেক্ট স্ট্রাকচার

```
ahsan-portfolio/
├── public/                # স্ট্যাটিক অ্যাসেটস (ইমেজ, ফেভিকন)
├── src/                   # সোর্স ফাইলস
│   ├── Components/        # পুনঃব্যবহারযোগ্য UI কম্পোনেন্টস
│   │   ├── CommonCompo/   # শেয়ার্ড এলিমেন্টস (Slider)
│   │   ├── Consultation.jsx
│   │   ├── Experiences.jsx
│   │   ├── Feature.jsx
│   │   ├── Navbar.jsx
│   │   ├── Publication.jsx
│   │   └── Footer.jsx
│   ├── index.css          # গ্লোবাল স্টাইল
│   └── main.jsx           # এন্ট্রি পয়েন্ট
├── README.md              # প্রোজেক্ট ওভারভিউ ও সেটআপ গাইড
├── package.json           # ডিপেন্ডেন্সি ও স্ক্রিপ্ট
├── vite.config.js         # Vite কনফিগারেশন
└── .eslintrc.js           # ESLint নিয়ম (ঐচ্ছিক)
```

---

## ইনস্টলেশন ও সেটআপ

1. **রিপোজিটরি ক্লোন করুন**

   ```bash
   git clone https://github.com/Mahmudulislamshuvo/ahsan-portfolio.git
   cd ahsan-portfolio
   ```

2. **ডিপেন্ডেন্সি ইনস্টল করুন**

   ```bash
   npm install
   ```

3. **ডেভেলপমেন্ট মোডে রান করুন**

   ```bash
   npm run dev
   ```

4. **প্রোডাকশন বিল্ড করুন**

   ```bash
   npm run build
   ```

5. **প্রোডাকশন বিল্ড প্রিভিউ করুন**

   ```bash
   npm run preview
   ```

---

---

## ব্যবহার

- About, Features, Experience, Publications, Contact এর মত সেকশনে নেভিগেট করুন।
- Consultation ফর্মের মাধ্যমে সরাসরি মেসেজ পাঠান।
- প্রোফাইল এবং প্রকল্প আপডেট করতে `src/Components` ফোল্ডারে কনটেন্ট কাস্টমাইজ করুন।

---

## ডেপ্লয়মেন্ট

Netlify, Vercel বা GitHub Pages এ সহজেই ডেপ্লয় করুন:

1. Git রিপোজিটরি কানেক্ট করুন।
2. ডিপেন্ডেন্সি ইনস্টল ও বিল্ড কমান্ড: `npm install && npm run build`।
3. `dist/` ডিরেক্টরি পাবলিশ করুন।

---

## কোড কোয়ালিটি ও লিন্টিং

- **ESLint:** কোড স্ট্যান্ডার্ড বজায় রাখে এবং পটেনশিয়াল ইস্যু ধরতে সাহায্য করে।
- **Prettier (ঐচ্ছিক):** অটোমেটিক কোড ফরম্যাটিং ইন্টিগ্রেশন।

---

## কন্ট্রিবিউটিং

1. রিপোজিটরি Fork করুন।
2. নতুন ব্রাঞ্চ তৈরি করুন: `git checkout -b feature/YourFeature`।
3. পরিবর্তন কমিট করুন: `git commit -m "feat: Add YourFeature"`。
4. ব্রাঞ্চ পুশ করুন: `git push origin feature/YourFeature`。
5. Pull Request ওপেন করুন এবং ডিফ অপরিবর্তনের বিবরণ দিন।

---

## লাইসেন্স

এই প্রোজেক্ট **MIT লাইসেন্স** এর আওতায়। বিস্তারিত [LICENSE](LICENSE) ফাইল দেখুন।

---

## যোগাযোগ

- **নাম:** মাহমুদুল ইসলাম
- **ইমেইল:** [mahmudulislammern@gmail.com](mailto:mahmudulislammern@gmail.com)
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/Mahmudulislamshuvo](https://github.com/Mahmudulislamshuvo)

---

---

<a id="english-version"></a>

# Ahsan Personal Portfolio Website

A modern, responsive portfolio website showcasing Mahmudul Islam’s skills, experiences, and projects. Built with React, Vite, and Tailwind CSS, it emphasizes clean design, smooth animations, and modular architecture to leave a lasting impression on potential employers and collaborators.

---

## Table of Contents

1. [Demo](#demo-1)
2. [Features](#features-1)
3. [Tech Stack](#tech-stack-1)
4. [Project Structure](#project-structure-1)
5. [Installation & Setup](#installation--setup-1)
6. [Available Scripts](#available-scripts-1)
7. [Usage](#usage-1)
8. [Deployment](#deployment-1)
9. [Code Quality & Linting](#code-quality--linting-1)
10. [Contributing](#contributing-1)
11. [License](#license-1)
12. [Contact](#contact-1)

---

## Demo

> **Live Preview:** [https://hshoaib.me/](https://hshoaib.me/)

![Homepage Screenshot](<./public/Screenshot%20(81).png>)

---

## Features

- **Responsive Design:** Mobile-first layout adapting seamlessly across devices.
- **Smooth Animations:** Scroll-triggered animations using AOS library.
- **Interactive Components:** Swiper-based sliders for featured projects.
- **Modular Architecture:** Reusable React components for Navbar, Feature, Experiences, Publication, Consultation form, and Footer.
- **Dark & Light Mode (optional):** Easily extendable to support theming.

---

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4, @material-tailwind/react
- **Animations:** AOS (Animate On Scroll)
- **Carousel:** Swiper 11
- **Linting:** ESLint with `@eslint/js` & `eslint-plugin-react-hooks`
- **Version Control:** Git

---

## Project Structure

```
ahsan-portfolio/
├── public/                # Static assets (images, favicon)
├── src/                   # Source files
│   ├── Components/        # Reusable UI components
│   │   ├── CommonCompo/   # Shared elements (Slider)
│   │   ├── Consultation.jsx
│   │   ├── Experiences.jsx
│   │   ├── Feature.jsx
│   │   ├── Navbar.jsx
│   │   ├── Publication.jsx
│   │   └── Footer.jsx
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── README.md              # Project overview & setup
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
└── .eslintrc.js           # ESLint rules (optional)
```

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mahmudulislamshuvo/ahsan-portfolio.git
   cd ahsan-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

---

## Usage

- Navigate through sections: About, Features, Experience, Publications, and Contact.
- Use the consultation form to send direct messages.
- Customize content in `src/Components` to update your profile and projects.

---

## Deployment

This project can be deployed on platforms like Netlify, Vercel, or GitHub Pages:

1. Connect your Git repository.
2. Install dependencies & build command: `npm install && npm run build`.
3. Publish the `dist/` directory.

---

## Code Quality & Linting

- **ESLint:** Enforces coding standards and detects potential issues.
- **Prettier (optional):** Integrate for automatic code formatting.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "feat: Add YourFeature"`.
4. Push to your branch: `git push origin feature/YourFeature`.
5. Open a Pull Request and describe your changes.

Please follow the established code style and run `npm run lint` before submitting.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

- **Name:** Mahmudul Islam
- **Email:** [mahmudulislammern@gmail.com](mailto:mahmudulislammern@gmail.com)
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/Mahmudulislamshuvo](https://github.com/Mahmudulislamshuvo)

---

_Crafted with ❤️ and modern web technologies to showcase my projects._
