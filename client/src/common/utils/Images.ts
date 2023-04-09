// Category Images
import Book from '../assets/categories/book.gif';
import Car from '../assets/categories/car.gif';
import Dress from '../assets/categories/dress.gif';
import Electronic from '../assets/categories/electronic.gif';
import Whiteware from '../assets/categories/whiteware.gif';

// Product Images
import AnnaKarenina from '../assets/products/anna_karenina.jpg';
import Satranc from '../assets/products/satranc.jpg';
import GapSweat from '../assets/products/gap_sweat.jpg';
import HyundaiGetz from '../assets/products/hyundai_getz.jpg';
import NissanGTR from '../assets/products/nissan_gtr.jpg';
import LenovoThinkpad from '../assets/products/lenovo_thinkpad.jpg';
import MacbookPro from '../assets/products/macbook_pro.jpg';
import SiemensFridge from '../assets/products/siemens_fridge.jpg';

export const getCategoryImage = (categoryImage: string) => {
  switch (categoryImage) {
  case 'book': {
    return Book;
  }
  case 'car': {
    return Car;
  }
  case 'dress': {
    return Dress;
  }
  case 'whiteware': {
    return Whiteware;
  }
  case 'electronic': {
    return Electronic;
  }
  }
};

export const getProductImage = (productImage: string) => {
  switch (productImage) {
  case 'siemens_fridge' : {
    return SiemensFridge;
  }
  case 'lenovo_thinkpad' : {
    return LenovoThinkpad;
  }
  case 'macbook_pro' : {
    return MacbookPro;
  }
  case 'gap_sweat' : {
    return GapSweat;
  }
  case 'nissan_gtr' : {
    return NissanGTR;
  }
  case 'hyundai_getz' : {
    return HyundaiGetz;
  }
  case 'satranc' : {
    return Satranc;
  }
  case 'anna_karenina' : {
    return AnnaKarenina;
  }
  }
};