import Image from "next/image";

// Nextjs中对图像做了优化 有懒加载的效果

const YourComponents = () => {
  return (
    <Image src="/images/profile.jpg" height={144} width={144} alt="Youe Name" />
  );
};

export default YourComponents;
