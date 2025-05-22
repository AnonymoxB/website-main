import Button from "@/components/button/Button";
import CardTema from "@/components/card/CardTema";
import { getCategoryTheme, getThemeAll } from "@/service/api";
import { ThemeCategoryType, ThemeType } from "@/type/theme";
import FilterTheme from "./FilterTheme";
import TagSwipper from "@/components/SwiperCustom/TagSwipper";

async function page({ searchParams }: { searchParams: { category: string } }) {
  let categoryUrl = searchParams.category;

  const allThemes: ThemeType[] = await getThemeAll(categoryUrl);
  const categories: ThemeCategoryType[] = await getCategoryTheme();

  return (
    <div className="flex flex-col items-center container mx-auto px-4">
      <section className="my-[15px] lg:my-[50px]">
        <div className="flex flex-col gap-2">
          <h1 className="bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl text-center">
            Sesuaikan Undangan Anda <br /> dengan Berbagai Pilihan Tema
          </h1>
          <p className="text-neutral-600 text-sm md:text-md lg:text-lg text-center">
            100+ tema dan inspirasi untuk undangan anda
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center w-full relative gap-6 lg:px-16">
        <FilterTheme>
          <TagSwipper categories={categories} categorySelect={categoryUrl} />
        </FilterTheme>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-y-7 w-full border-2 justify-items-center p-5 md:py-8 lg:px-8 rounded-xl">
          {allThemes.map((theme) => {
            return <CardTema key={theme.id} {...theme} />;
          })}
        </div>
        {!!allThemes.length && (
          <Button
            className="bg-neutral-50 text-neutral-700 hover:bg-blue-500"
            size="small"
          >
            Tampilkan lebih banyak
          </Button>
        )}
      </section>
      <div className="w-full lg:px-16">
        <section className="flex flex-col md:flex-row gap-10 p-6 lg:px-20 md:py-0 items-center bg-gradient-to-br from-gradient-blue-start to-gradient-blue-end w-full rounded-3xl overflow-hidden mt-10 md:mt-20 md:mb-10">
          <div className="flex flex-col gap-8 order-2 md:order-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                Ingin Design Lain..
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-blue-50">
                Tidak perlu khawatir, Anda dapat memesan layanan custom tema
                atau design dengan menghubungi kami
              </p>
            </div>
            <div>
              <Button className="bg-neutral-50 text-neutral-700" size="small">
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(/assets/image/decaration-theme.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-full h-[340px] order-1 md:order-2 bg-contain lg:bg-cover"
          ></div>
        </section>
      </div>
    </div>
  );
}

export default page;
