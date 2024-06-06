// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type TypeData = {
  id: number | string;
  img: string;
  name: string;
  title: string;
};
const data: TypeData[] = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/69/a6/a2/69a6a247a8d8c18f6916477a14c68723.jpg",
    name: "Есть всё, что бы наполнить жизнь счастьем",
    title:
      "Благоустройство квартала насыщенно различными локациями, которые жители могут посещать свободно. В их распоряжении банный комплекс высокого уровня, спортивные студии, плей-хаб с игровыми площадками для всех возрастов",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/d9/8a/d6/d98ad662dd22fa831283a65fda2a13b9.jpg",
    name: "Есть всё, что бы наполнить жизнь счастьем",
    title:
      "Благоустройство квартала насыщенно различными локациями, которые жители могут посещать свободно. В их распоряжении банный комплекс высокого уровня, спортивные студии, плей-хаб с игровыми площадками для всех возрастов",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/89/74/7b/89747b33792811c5a147842b05381316.jpg",
    name: "Есть всё, что бы наполнить жизнь счастьем",
    title:
      "Благоустройство квартала насыщенно различными локациями, которые жители могут посещать свободно. В их распоряжении банный комплекс высокого уровня, спортивные студии, плей-хаб с игровыми площадками для всех возрастов",
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TypeData[]>,
) {
  res.status(200).json(data);
}
