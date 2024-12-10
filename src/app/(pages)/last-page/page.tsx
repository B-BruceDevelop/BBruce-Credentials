import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";


const TrustedBrands = () => {

    return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header title="???????" prevPage="/highlight-reel" />
      <section className="flex grow items-center justify-center w-full h-full p-[1vw] gap-[2vw] bg-red-300">
            <h1 className="text-8xl">??????????????????</h1>
      </section>
      <Footer
        title="????????????????????????????."
        width="75vw"
        size="4xl"
      />
    </main>
  );
};

export default TrustedBrands;
