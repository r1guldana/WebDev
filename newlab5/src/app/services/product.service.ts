import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  private products: Product[] = [
    // Смартфоны (categoryId: 1)
    {
      id: 1,
      name: 'Apple iPhone 13',
      description: 'Смартфон с диагональю 6.1 дюйма, чип A15 Bionic, двойная камера 12 МП.',
      price: 318000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/h0c/84378448232478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h41/84378448265246.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
      categoryId: 1,
      likes: 0,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Флагманский смартфон с камерой 50 МП и процессором Snapdragon 8 Gen 2.',
      price: 500000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7c/p80/10325752.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/p80/10325755.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p81/10325758.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=750000000',
      categoryId: 1,
      likes: 0,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 16 Pro 128Gb Dual eSim золотистый',
      description: 'Смартфон с AMOLED экраном 6.67 дюйма и батареей 5000 мАч.',
      price: 777000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8a/87310437154846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h49/87310437220382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/he3/87310437285918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h48/87310437351454.jpg?format=gallery-medium'
      ],
      link: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8a/87310437154846.jpg?format=gallery-medium',
      categoryId: 1,
      likes: 0,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Смартфон Motorola G86 Power',
      description: ' 8 ГБ/512 ГБ зеленый',
      price: 555000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pe2/69647711.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pe2/69647711.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/pe2/69647717.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/paf/pe5/69647723.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/motorola-g86-power-8-gb-512-gb-zelenyi-147084655/?c=750000000',
      categoryId: 1,
      likes: 0,
      isFavorite: false
    },
    {
      id: 5,
      name: 'Смартфон Redmi 15C NFC ',
      description: 'Смартфон Характеристики Смартфон Redmi 15C NFC 8 ГБ/256 ГБ черный',
      price: 369999,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/p76/61636934.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p38/p76/61636934.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p38/p76/61636934.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p38/p76/61636934.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-15c-nfc-8-gb-256-gb-chernyi-144392065/?c=750000000',
      categoryId: 1,
      likes: 0,
      isFavorite: false
    },

    // Ноутбуки (categoryId: 2)
    {
      id: 6,
      name: 'Apple MacBook Air 13',
      description: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      price: 950000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium'
      ],
      link: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      categoryId: 2,
      likes: 0,
      isFavorite: false
    },
    {
      id: 7,
      name: 'Ноутбук Lenovo',
      description: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 512 Гб / Win 11 / 15IAU7 / 82RK00EWRK7.',
      price: 1212120,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2c/65053326376990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hf8/65053328080926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2c/65053326376990.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000',
      categoryId: 2,
      likes: 0,
      isFavorite: false
    },
    {
      id: 8,
      name: 'Ноутбук HYDRA Home H14 ',
      description: 'Ноутбук HYDRA Home H14 14" / 12 Гб / SSD 256 Гб / Win 11 / MKI',
      price: 400000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/pbc/72877510.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p05/pbc/72877510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe9/pbb/72877511.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p24/35785064.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h14-14-12-gb-ssd-256-gb-win-11-mkii-119194958/?c=750000000',
      categoryId: 2,
      likes: 0,
      isFavorite: false
    },
    {
      id: 9,
      name: 'Ноутбук ASUS TUF',
      description: 'Универсальный ноутбук ASUS TUF A15 FA506 15.6" / 16 Гб / SSD 512 Гб / Без ОС / 90NR0JF7-M00JE0',
      price: 123456,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/p0a/72613233.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=750000000',
      categoryId: 2,
      likes: 0,
      isFavorite: false
    },
    {
      id: 10,
      name: 'Ноутбук ThundeRobot',
      description: 'Ноутбук ThundeRobot 911 Plus SD 17.3" / 16 Гб / SSD 512 Гб / Без ОС / JT009800KRU',
      price: 1500000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/p4d/53363889.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/p4d/53363889.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p4a/53363891.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/p4a/53363893.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911-plus-sd-17-3-16-gb-ssd-512-gb-bez-os-jt009800kru-142619054/?c=750000000',
      categoryId: 2,
      likes: 0,
      isFavorite: false
    },

    // Наушники (categoryId: 3)
    {
      id: 11,
      name: 'Apple AirPods Pro',
      description: 'Беспроводные наушники с активным шумоподавлением и пространственным аудио.',
      price: 250000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h13/hc1/63785535733790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/h5d/63785536061470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/hc1/63785535733790.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000',
      categoryId: 3,
      likes: 0,
      isFavorite: false
    },
    {
      id: 12,
      name: 'Sony WH-1000XM4',
      description: 'Премиальные наушники с лучшим шумоподавлением и 30 часами работы.',
      price: 99999,
      rating: 4.99,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
        'hhttps://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-chernyi-140045244/?c=750000000',
      categoryId: 3,
      likes: 999,
      isFavorite: false
    },
    {
      id: 13,
      name: 'JBL Tune 510BT',
      description: 'Беспроводные наушники с мощным басом и 40 часами работы.',
      price: 57000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
      categoryId: 3,
      likes: 0,
      isFavorite: false
    },
    {
      id: 14,
      name: 'Xiaomi Mi True Wireless',
      description: 'Бюджетные TWS наушники с хорошим звуком и компактным кейсом.',
      price: 67000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h0e/63774191517726.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h2f/63774192042014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/h0e/63774191517726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h2f/63774192042014.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-mi-true-wireless-earbuds-basic-airdots-ej04ls-chernyi-4804295/?c=750000000',
      categoryId: 3,
      likes: 0,
      isFavorite: false
    },
    {
      id: 15,
      name: 'Bose QuietComfort 45',
      description: 'Наушники с исключительным комфортом и превосходным шумоподавлением.',
      price: 676700,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000',
      categoryId: 3,
      likes: 0,
      isFavorite: false
    },

    // Планшеты categoryId: 4
    {
      id: 16,
      name: 'Apple iPad Pro 11',
      description: 'Мощный планшет с чипом M2 и дисплеем ProMotion 120 Гц.',
      price: 90000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
      categoryId: 4,
      likes: 21,
      isFavorite: false
    },
    {
      id: 17,
      name: 'Samsung Tab S9',
      description: 'Флагманский планшет с AMOLED экраном 120 Гц и стилусом в комплекте.',
      price: 80704,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h67/82770863489054.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h76/hc0/82770435211294.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      categoryId: 4,
      likes: 79,
      isFavorite: false
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Отличный планшет для работы и развлечений с экраном 144 Гц,  8 Гб/256 Гб серый .',
      price: 350000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      categoryId: 4,
      likes: 67,
      isFavorite: false
    },
    {
      id: 19,
      name: 'Lenovo Tab P11',
      description: 'Доступный планшет с хорошим экраном и поддержкой стилуса.',
      price: 25900,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/h5b/79994504183838.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h72/79994504445982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h33/79994502086686.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000',
      categoryId: 4,
      likes: 10,
      isFavorite: false
    },
    {
      id: 20,
      name: 'Huawei MatePad 11',
      description: 'Планшет с экраном 120 Гц и отличными стереодинамиками.',
      price: 456000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h26/86746842857502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h0a/86746843185182.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
      categoryId: 4,
      likes: 222,
      isFavorite: false
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    // @ts-ignore
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  deleteProduct(productId: number): void {
    // @ts-ignore
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
