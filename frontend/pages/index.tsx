/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Slider, { TypeData } from "@/components/Slider/Slider";

type TypeHomePageProps = {
  data: TypeData;
};

const HomePage: NextPage<TypeHomePageProps> = ({ data }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (active === data.length) {
      setActive((prev) => (prev = 0));
    }
    if (active < 0) {
      setActive((prev) => (prev = data.length -1));
    }
  }, [active]);
  return (
    <>
      <Header setActive={setActive} />
      <Slider data={data} active={active} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/hello");
    const { data }: { data: TypeData } = response;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default HomePage;
