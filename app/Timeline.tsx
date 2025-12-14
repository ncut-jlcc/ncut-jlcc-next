import Image from "next/image";

const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical m-10">
      <li>
        <div className="timeline-middle text-2xl">🎉</div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic text-3xl">2009</time>
          <div className="text-4xl">
            日语社成立啦
            <span className="italic"> !</span>
          </div>
          <Image
            src="/riyushe-jisuanji.webp"
            alt="logo"
            width={500}
            height={500}
            className="m-5"
          />
        </div>
        <hr />
      </li>
      <li>
        <div className="timeline-middle text-2xl">🎉</div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic text-3xl">2017.12.14</time>
          <div className="text-4xl">社联晚会 -《恋舞》</div>
          <Image
            src="/lianwu.jpg"
            alt="logo"
            width={500}
            height={500}
            className="m-5"
          />
        </div>
        <hr />
      </li>
      <li>
        <div className="timeline-middle text-2xl">🎉</div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic text-3xl">2009</time>
          <div className="text-4xl">
            日语社成立啦
            <span className="italic"> !</span>
          </div>
          <Image
            src="/riyushe-jisuanji.webp"
            alt="logo"
            width={500}
            height={500}
            className="m-5"
          />
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default Timeline;
