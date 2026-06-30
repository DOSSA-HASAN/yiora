export interface Experience {
  id: string;
  title: string;
  category: string;
  date: string;
  spotsLeft: number;
  isFull: boolean;
  description: string;
  price: number;
  time: string;
  rating: number;
  heroImage: string;
  host: {
    name: string;
    location: string;
    avatar: string;
    alt: string;
  };
}

export const experiencesData: Experience[] = [
  {
    id: "pottery-and-prosecco",
    title: "Pottery & Prosecco",
    category: "Creative",
    date: "Oct 12",
    spotsLeft: 4,
    isFull: false,
    price: 85,
    time: "4:00 PM — 7:00 PM",
    rating: 4.9,
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2MPMCf9IqHBfHvRPpAC5P7nQNLHH5s-1syiI0UFjJLiaM03YSw7MBsTmYO_dmLAQawIaEJSVh7AyBUCifLKzFVU8SL5LSx81tGK4bJWe5iRoNFG9JWmITzuZfiDSSXomJ7Cdx7IURzMCURgrDhTeQR8goY3Dnskp4dtzpmGVRBGfFxCKkMqACuSClAUCuS0X8Fj7G1LPOoY7ZmZTRMTiGylpUiCk_a4WadPH6Mr0gYmFbbf1YWzcmq3HH8NseHORT_wcPshkyOrk",
    description:
      "Unwind with clay and conversation. No experience needed, just good vibes and a splash of bubbles.",
    host: {
      name: "Maya Chen",
      location: "London, UK",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgcvqvrMEDH5LH_DLcIcowYsSQonaeM8p_ttljzoo3sXmPRIDrudHuzG7U7w4xmKmq3pASIXiBQlzvjTdRdwdZLOXHsUt7Itmf6Di8zH3ehWaDFlqI0jVTvwLg3S3SPkgi31ttCjTSokg5vQw-mAYqK93qxrHLwTckC99CWQ-DpnzRP-6w_ieeX5mxIso87pb1ry0n6pFEHoXd9B9GghNSvmyft-pNeOI_Erp7ZIGZTXwfQZuHT5EQFeXVCwBTREJO6zoOU20qKYI",
      alt: "Portrait of Maya Chen",
    },
  },
  {
    id: "sunset-sound-bath",
    title: "Sunset Sound Bath",
    category: "Wellness",
    date: "Oct 15",
    spotsLeft: 12,
    isFull: false,
    price: 60,
    time: "5:30 PM — 7:00 PM",
    rating: 4.8,
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4rG-zaa78qb-tbwr2WDwpbCg-V9c_IfFIUy8d-LPwUmNMICB4Ei8ReQRjyhTBK4SNzf9xNvKI0W8ninpbyDY0ng_eAVBwUNrVRPQ9Z6cn3okc6fMvNNtd2XFR7K11kh6alNUuFbLoB8aBh2q8z5QszWGm96sY-M-EjLs-jA5s9E5SBYyFI0p6oUMcWJJjzh80ACgNRTNd81MffwxgkPs08Zhw9m5JAebmIyfLlkxk9Gt0z7VPnx0E6IjXlBdI1fHiKLfefno4aT4",
    description:
      "Connect with your breath and the horizon. A restorative flow followed by a meditative sound journey.",
    host: {
      name: "David Aris",
      location: "Remote / Zoom",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAj2Kf08DzClt5FTut3Vb4y8JLP7qHQaTymUpB5IxRoKXsoBCvjvMUP33UnQQt7SDK9wxMlHW0HHeIsSoL93phIHxseFgN46Ls7O1_4HhhztYL9SwAf_foFavdSzLyf8CpLY3c02MtimJQhKN6YDSVdPicNkH8JxvaxWHqtIgx00n6irC5rsqkOGfNcUzAOGdeN03pxiyQeSb557_rjGZ8_HTfV6VIU80p31qbM-HyP5YD-6vnTJ9pd2oOKkg5A5J2vKoqFtHsYbBo",
      alt: "Portrait of David Aris",
    },
  },
  {
    id: "retro-game-night",
    title: "Retro Game Night",
    category: "Games",
    date: "Oct 18",
    spotsLeft: 2,
    isFull: false,
    price: 25,
    time: "7:00 PM — 10:00 PM",
    rating: 5.0,
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZaG2gRHl0dT9WvCAn_n8zIZ4gu8AQKk147KISjvEyNjdF4fBGririt8yLjnMMYc3dO5VTtklgI_bLwN6y2zvrZqlT8P5dRB6Si9eS1zBDFaL6oGAoOSEkmxBTbJVswld4xQpx2V1jdCUusGMIe1cmKEGLMJ6hRn9E8JYJlpV4ynPSprbnw9w9pFQYzuUewL7HSkSAd842jezqVcvJLYlEF0NpMxguVFFuLbjiKQz3t5DQwzBMLUaEKIgQwLFWeQy2io-YFtNl6qQ",
    description:
      "Competitive fun meets nostalgic vibes. Join us for a night of curated tabletop games and high-energy laughs.",
    host: {
      name: "Marcus T.",
      location: "Berlin, DE",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDE7TkWz6hJZ9_iLPWWsL7PlqK23z78XM0IlqMtpfni-tIt9DhjYagzDxYEV45SgUeiXpjGPq-JI6xWPpBMZBr8e-ArV2PB-m2R7QfsJ6Zs9FvGs_5mc_s4tB-yrQJr4_g4ng4vqBjAfzwmnlcmU5m3BeuRbYX1SawNpkTIDjI2aMxXIiYWnTvbk27IzaMeZozF9D5nZgllGNI9eATvtTPihK-qP2_0zRRlqlSpjdkl0FGXq3kzBDhbfImNwgbKXbWumKyQe9OOg-Q",
      alt: "Portrait of Marcus T.",
    },
  },
  {
    id: "safe-space-circle",
    title: "Safe Space Circle",
    category: "Girl Talk",
    date: "Oct 20",
    spotsLeft: 8,
    isFull: false,
    price: 40,
    time: "6:30 PM — 8:30 PM",
    rating: 4.9,
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ubCTLVr8G6Pd7mtGbPgZR_ymp3dxImul90ptp4CSDV5B_Hk913gk54Aa7GBbRurkNp-SD6zJMOsyG2DQTD8dsp1-EBvD6Rissd3eP7PbR3Y_98W3AdnScn2MfZ9aU8vbqDO8pEnVNlwHVv86CwuZtFTVJHOhqoxe1aK4Bo2sF7GEI4l6nFcqsViq_Jy-aiDZPelD4kp8u1jfwLV_eF1l-7InHV_JpYBsOA2uwQgYIxQDmAdzseBKt9wQcW8TTQG7glMnfT3VvdQ",
    description:
      "A curated evening for open hearts. We discuss life, growth, and the things that really matter in a judgmental-free zone.",
    host: {
      name: "Elena Rose",
      location: "New York, US",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAC-RLGPPP3LBFQT379WLe98NMY7S_IVS4Rs_yYt3RX5FxLxsxnzWqCj7N-wGCGRJkSxjIopptm2SZnB5sBtS36zeVxkMQIJ_c8K8GDQBa2Vh8SmEXZPLjP23wtYgPNwf64ENkhrxIgdPux9CPUubaGOdqjEEHe7r8QzvONfgkSyz6wg9S0POwwKEIOFALjuOXJbIq4ntvj9SdF-usGX4GPKWR-ir4pZDMG3qs6mhBRnc7fu7WHNmwaGCHdoZmh3wbFQkrpHA19y6k",
      alt: "Portrait of Elena Rose",
    },
  },
  {
    id: "vibe-and-flow-pilates",
    title: "Vibe & Flow Pilates",
    category: "Fitness",
    date: "Oct 25",
    spotsLeft: 0,
    isFull: true,
    price: 35,
    time: "9:00 AM — 10:15 AM",
    rating: 4.7,
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC349zjfxtnbJQwJ4nKTJpi1-tBPDIG5abjYDjgtp_udqKKjfEur1AoCr2DSdDitZmOdRK84Qw878xZVIIucpaRTLYqqqAX-O-tA3TbRldjiirQT3tzJ3aOsU3PTkpiN-Acfii_CJdjJGHk384YDS8GIBQAgexvm9corBvrCuEMDskvCuH11aV71UV7g51bbCcjXZSGsYpmwzafYCUHt3o05npowmyx2IBrndwbEeDME7m23Y_8-k06eSdY_cISl_oH_WsR9-jt-T8",
    description:
      "A high-energy pilates session set to an upbeat soul-full playlist. Strength building that feels like a party.",
    host: {
      name: "Zoe Bell",
      location: "Austin, US",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwN1cNVsY-4rcO4RUNv4H63KySMdV-rLCXhqhvlwWufnS660Oi-WORl3CNTRdAoJk1i-5XMJhAQzdfu8xG0XsIfbgEDPjSlwg6Fha7Lz6QLzOHNPx1taYz9lLBSpcUFuihbjpCfXw4hYTokEFVnxq59c7NTfbU-KGAv_PSTZf11qnWp2xlb759inpKPAH3458ccTZM83fBXrNAL8o815i2kuXA1pANjE2etkFvZXHH4K-r3RoAswC3IExtljURGvQlvAMg8jQIakc",
      alt: "Portrait of Zoe Bell",
    },
  },
];
