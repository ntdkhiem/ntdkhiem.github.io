"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Hackathons({}: Props) {
  // return (
  //   <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mx-20">
  //     {/* <!-- Item #1 --> */}
  //     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
  //       {/* <!-- Icon --> */}
  //       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-800 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
  //         <svg
  //           className="fill-current"
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="12"
  //           height="10"
  //         >
  //           <path
  //             fill-rule="nonzero"
  //             d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
  //           />
  //         </svg>
  //       </div>
  //       {/* <!-- Card --> */}
  //       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
  //         <div className="flex items-center justify-between space-x-2 mb-1">
  //           <div className="font-bold text-slate-900">Order Placed</div>
  //           <time className="font-caveat font-medium text-indigo-500">
  //             08/06/2023
  //           </time>
  //         </div>
  //         <div className="text-slate-500">
  //           Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
  //           morbi blandit cursus risus.
  //         </div>
  //       </div>
  //     </div>

  //     {/* <!-- Item #2 --> */}
  //     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
  //       {/* <!-- Icon --> */}
  //       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
  //         <svg
  //           className="fill-current"
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="12"
  //           height="10"
  //         >
  //           <path
  //             fill-rule="nonzero"
  //             d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
  //           />
  //         </svg>
  //       </div>
  //       {/* <!-- Card --> */}
  //       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
  //         <div className="flex items-center justify-between space-x-2 mb-1">
  //           <div className="font-bold text-slate-900">Order Shipped</div>
  //           <time className="font-caveat font-medium text-indigo-500">
  //             09/06/2023
  //           </time>
  //         </div>
  //         <div className="text-slate-500">
  //           Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
  //           morbi blandit cursus risus.
  //         </div>
  //       </div>
  //     </div>

  //     {/* <!-- Item #3 --> */}
  //     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
  //       {/* <!-- Icon --> */}
  //       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
  //         <svg
  //           className="fill-current"
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="12"
  //           height="10"
  //         >
  //           <path
  //             fill-rule="nonzero"
  //             d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
  //           />
  //         </svg>
  //       </div>
  //       {/* <!-- Card --> */}
  //       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
  //         <div className="flex items-center justify-between space-x-2 mb-1">
  //           <div className="font-bold text-slate-900">In Transit</div>
  //           <time className="font-caveat font-medium text-indigo-500">
  //             10/06/2023
  //           </time>
  //         </div>
  //         <div className="text-slate-500">
  //           Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
  //           morbi blandit cursus risus.
  //         </div>
  //       </div>
  //     </div>

  //     {/* <!-- Item #4 --> */}
  //     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
  //       {/* <!-- Icon --> */}
  //       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
  //         <svg
  //           className="fill-current"
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="12"
  //           height="10"
  //         >
  //           <path
  //             fill-rule="nonzero"
  //             d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
  //           />
  //         </svg>
  //       </div>
  //       {/* <!-- Card --> */}
  //       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
  //         <div className="flex items-center justify-between space-x-2 mb-1">
  //           <div className="font-bold text-slate-900">Out of Delivery</div>
  //           <time className="font-caveat font-medium text-indigo-500">
  //             12/06/2023
  //           </time>
  //         </div>
  //         <div className="text-slate-500">
  //           Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
  //           morbi blandit cursus risus.
  //         </div>
  //       </div>
  //     </div>

  //     {/* <!-- Item #5 --> */}
  //     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
  //       {/* <!-- Icon --> */}
  //       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
  //         <svg
  //           className="fill-current"
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="12"
  //           height="12"
  //         >
  //           <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
  //         </svg>
  //       </div>
  //       {/* <!-- Card --> */}
  //       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
  //         <div className="flex items-center justify-between space-x-2 mb-1">
  //           <div className="font-bold text-slate-900">Delivered</div>
  //           <time className="font-caveat font-medium text-amber-500">
  //             Exp. 12/08/2023
  //           </time>
  //         </div>
  //         <div className="text-slate-500">
  //           Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
  //           morbi blandit cursus risus.
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="relative text-white">
      <div className="absolute h-full bg-[url('/hackathon.png')] bg-cover w-full opacity-20 z-0"></div>
      <div className="py-20 md:py-10 w-full text-center">
        <p className="text-sm 2xl:text-base text-tighter leading-3">
          Co-Director
        </p>
        <h1 className="text-lg 2xl:text-2xl font-bold tracking-tight">
          @HackUMass & @Hack(H)er413
        </h1>
        <p className="text-sm 2xl:text-base text-tighter">
          June 2022 - PRESENT | Amherst, MA
        </p>
      </div>
      <div className="px-20">
        {/* <!-- Item #1 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            The origin
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-yellow-800 bg-yellow-50 rounded-full">
              June, 2022
            </time>
            <div className="text-xl font-bold text-yellow-300">
              An Organizer of HackUMass X
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            Pre-HackUMass X
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-yellow-800 bg-yellow-50 rounded-full">
              July, 2022
            </time>
            <div className="text-xl font-bold text-yellow-300">
              Developer/Maintainer of HackUMass X Website
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>


        {/* <!-- Item #3 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            HackUMass X
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-yellow-800 bg-yellow-50 rounded-full">
              Sept, 2022
            </time>
            <div className="text-xl font-bold text-yellow-300">
              Mentor/Photographer
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>


        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            Hack(H)er413 2023
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-pink-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-pink-800 bg-pink-50 rounded-full">
              Feb, 2023
            </time>
            <div className="text-xl font-bold text-pink-300">
            Mentor
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>


        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            The pivotal point
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-800 bg-indigo-50 rounded-full">
              June, 2023
            </time>
            <div className="text-xl font-bold text-indigo-300">
              Director of Technology of HackUMass XI
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            Leadership
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-800 bg-indigo-50 rounded-full">
              Aug, 2023
            </time>
            <div className="text-xl font-bold text-indigo-300">
              Team Lead
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
          HackUMass XI
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-800 bg-indigo-50 rounded-full">
              Sept, 2023
            </time>
            <div className="text-xl font-bold text-indigo-300">
              Mentor/Workshop Lead
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
            Hack(H)er413 2024
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-cyan-800 bg-cyan-50 rounded-full">
              Feb, 2024
            </time>
            <div className="text-xl font-bold text-cyan-300">
            Co-Director of Technology
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">
          Next step?
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-800 bg-emerald-50 rounded-full">
              ????
            </time>
            <div className="text-xl font-bold text-emerald-300">
            More Hackathon!!
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>


      </div>
    </div>
  );
}
