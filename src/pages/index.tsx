import { dishes } from "@/data/dishes";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

// #111418

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <header className="w-full px-6 md:px-10 xl:px-20 h-14 flex bg-[#111418] items-center justify-center">
        <h5 className="text-xl font-medium">786 Biryani Hub</h5>
      </header>
      <main className="h-full w-full flex-1 pb-80 px-6 md:px-10 xl:px-20">
        {children}
      </main>
      <footer className="w-full mt-auto px-6 md:px-10 xl:px-20 py-32 flex flex-col gap-y-10 bg-[#181b21] border-t border-[#383b40]">
        <div className="flex flex-col">
          <h5 className="text-3xl font-medium uppercase">786 Biryani Hub</h5>
          <h5 className="uppercase text-sm mb-7 text-gray-300">
            Middle Eastern Cuisine
          </h5>
          <span className="text-[#FFA100] text-lg uppercase">
            Visit us at our restaurant
          </span>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="inline-flex items-center gap-x-2.5">
            <span className="bg-[#111418] p-2.5 rounded">
              <MapPinIcon size={24} className="text-white" />
            </span>
            <span className="text-xl text-[#FFA100]">
              #300 line #5, SAN Vicente Central, Urdaneta
            </span>
          </div>
          {/* <div className="inline-flex items-center gap-x-2.5">
            <span className="bg-[#111418] p-2.5 rounded">
              <PhoneIcon size={24} className="text-white" />
            </span>
            <span className="text-xl text-[#FFA100]">+91 123 456 7890</span>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>786 BIRYANI HUB</title>
        <meta
          name="description"
          content="786 Biryani Hub - Middle Eastern Cuisine, Discover a new level of taste"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Layout>
        <div className="w-full bg-[#111418] relative flex py-32 gap-y-10 xl:gap-y-32 flex-col">
          <div>
            <div className="space-y-4">
              <span className="capitalize text-lg text-[#FFA100]">
                discover a new level of taste.
              </span>
              <h1 className="text-5xl md:text-6xl">Middle Eastern Cuisine</h1>
            </div>
          </div>
          <div>
            {/* dishes */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-y-32 xl:gap-x-6 gap-x-4 gap-y-10">
              {dishes.map(({ id, dishName, dishImageName }) => (
                <div key={id} className="relative flex flex-col gap-y-4">
                  <div className="relative w-full h-full min-h-80 xl:min-h-[28rem] 2xl:min-h-[32rem] rounded">
                    <Image
                      src={`/images/${dishImageName}`}
                      alt={dishName}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-70 rounded"
                    />
                  </div>

                  {/* <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl text-white">{dishName}</h2>
                </div> */}
                  <div className="flex items-center gap-x-1.5">
                    <div className="w-1 h-[80%] rounded bg-[#FFA100]/80"></div>
                    <h2 className="text-xl xl:text-2xl font-medium text-white uppercase">
                      {dishName}
                    </h2>
                  </div>
                </div>
              ))}
              {/* <Image
            src="https://images.unsplash.com/photo-1479803244419-b24dfe9cbafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Middle Eastern Cuisine"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
          /> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function T() {
  return (
    <>
      <h1
        className="text-6xl"
        style={{
          fontFamily: "Raleway",
        }}
      >
        Middle Eastern Cuisine
      </h1>
      <h1
        className="text-6xl"
        style={{
          fontFamily: "Libre Baskerville",
        }}
      >
        Middle Eastern Cuisine
      </h1>
      <h1
        className="text-6xl"
        style={{
          fontFamily: "Playfair Display",
        }}
      >
        Middle Eastern Cuisine
      </h1>
    </>
  );
}

// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/pages/index.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
