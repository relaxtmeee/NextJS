import Button from "../components/Button/Button";
import Htag  from "../components/Htag/Htag";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { log } from "console";

function Home({menu, firstCategory} : HomeProps): JSX.Element {
  
  const [rating, setRating] = useState<number>(4);
  
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow="down">Test</Button>
      <Button appearance='ghost' arrow="down">Test</Button>
      <P size="14px">Hello!</P>
      <P size="16px">Hello!</P>
      <P size="18px">Hello!</P>
      <Tag size="14px" color="red">Red</Tag>
      <Tag color="gray">gray</Tag>
      <Tag href='helloWorld' color="green">green</Tag>
      <Tag color="primary">primary</Tag>
      <Tag size="14px" color="ghost">ghost</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  )
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps = async () => {

  const firstCategory = 0;

  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', 
    {
      firstCategory
    });

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}