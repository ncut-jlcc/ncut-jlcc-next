const Heroes = () => {
  return (
    <>
      {/* 第一个 Hero */}
      <section
        className="hero min-h-screen"
        style={{ backgroundImage: `url('/sushe.webp')` }}
      >
        <div className="hero-content text-left p-0 flex justify-start items-start w-full h-full">
          <div className="max-w-md px-12 py-12 text-left">
            <h1 className="mb-4 text-4xl font-medium">
              <span className=" relative right-[2px] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                北方工大日语社
              </span>
            </h1>
            <h2 lang="ja" className="mb-1 text-xl">
              北方工大日本語サークル
            </h2>
            <h2 className="mb-4 text-lg">
              <span className="text-primary text-2xl relative top-px">J</span>
              apanese
              <span className="text-primary text-2xl relative top-px"> L</span>
              anguage and
              <span className="text-primary text-2xl relative top-px"> C</span>
              ulture
              <span className="text-primary text-2xl relative top-px"> C</span>
              lub at NCUT
            </h2>
            <blockquote className="mb-6 text-base md:text-lg italic border-l-4 border-primary px-6 py-4 bg-base-100/30 backdrop-blur-sm rounded-lg">
              语言是我们所知的最庞大、最广博的艺术，是一代代人无意识地创造出的宏伟而无名的作品。
              <br />
              <span className="block mt-2 text-sm text-right w-full">
                ——《语言论》( Edward Sapir 著 )
              </span>
            </blockquote>
          </div>
        </div>
      </section>
      {/* 第二个 Hero */}
      <section className="w-full bg-linear-to-br from-blue-50 to-accent py-12 px-4 md:px-0">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold m-10 text-primary">
            在这里，你可以——
          </h2>
          <ul className="list-disc pl-6 space-y-6 text-lg md:text-md mx-10 text-base-content/90">
            <li className="rounded transition hover:-translate-y-1 cursor-pointer p-1">
              <span className="font-semibold text-secondary">
                找到同好，成为社牛！
              </span>
              <br />
              日语社的同学们多才多艺，来这里交到和你一样或是热爱唱歌、或是喜欢配音、或是痴迷日剧的知心朋友吧！
            </li>
            <li className="rounded transition hover:-translate-y-1 cursor-pointer p-1">
              <span className="font-semibold text-secondary">
                一起学习，变成大佬！
              </span>
              <br />
              社团提供多方面的日语学习指导与实际应用场景，在这里入门或是进阶日语吧！
            </li>
            <li className="rounded transition hover:-translate-y-1 cursor-pointer p-1">
              <span className="font-semibold text-secondary">
                唱歌配音，不在话下！
              </span>
              <br />
              和大家一起学唱好听的日语歌、一起学念感人的台词！
            </li>
            <li className="rounded transition hover:-translate-y-1 cursor-pointer p-1">
              <span className="font-semibold text-secondary">
                练好口语，秀出口才！
              </span>
              <br />
              在每周的日语角和同好或留学生交流，练出你落落大方、出口成章的口语能力！
            </li>
            <li className="rounded transition hover:-translate-y-1 cursor-pointer p-1">
              <span className="font-semibold text-secondary">
                实用技能，统统 get ！
              </span>
              <br />
              想要更好的口才？想更擅长人际交往？想掌握某项工作技能？各种能力都可以在社团有锻炼自己的机会！
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Heroes;
