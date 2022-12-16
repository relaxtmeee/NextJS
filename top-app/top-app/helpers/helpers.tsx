import CoursesIcon from '../layout/Menu/icons/courses.svg';
import ServisesIcon from '../layout/Menu/icons/servises.svg';
import BooksIcon from '../layout/Menu/icons/books.svg';
import ProductsIcon from '../layout/Menu/icons/products.svg';

import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';


export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevelCategory.Servises },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];