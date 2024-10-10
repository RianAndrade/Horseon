import Image from "next/image";

export const Heroes = () => {
  return (
    <div
      className="
      Flex
      flex-col
      items-center
      justify-center
      max-w-5xl
      "
    >
      <div
        className="
        flex
        items-center
        "
      >
        <div
          className="
          relative
          w-[400px]
          h-[250px]
          sm:w-[450]
          sm:h-[300px]
          md:h-[350px]
          md:w-[500px]"
        >
          <Image
            src="/heroes-white.png"
            fill
            className="object-contain dark:hidden"
            alt="Documento"
          />
          <Image
            src="/heroes-dark.png"
            fill
            className="object-containv hidden dark:block"
            alt="Documento"
          />
        </div>
      </div>
    </div>
  );
};
