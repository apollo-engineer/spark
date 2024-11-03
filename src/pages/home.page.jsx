import React from 'react';
import Header from '../components/header.component';

import {
  Award,
  User,
  Briefcase,
  Code,
  BarChart2,
  ThumbsUp,
  CloudLightning,
  Target,
  Repeat,
  Edit,
  Clock,
} from 'react-feather';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div id="get-start">
          <div className="bg-cover bg-no-repeat bg-[url('imgs/hero.png')] p-10 pb-20 text-white border-solid border-y-2 border-fuchsia-700">
            <p className='text-[130px] font-bold tracking-wider h-32'>Revenue</p>
            <p className="text-[130px] font-bold tracking-wider text-yellow-500 h-48">Overflow</p>
            <div className="flex flex-row px-8 pb-5 leading-tight">
              <div className="basis-3/4 text-3xl tracking-wider">
                The difference between <span className="font-medium text-3xl"> GREAT </span>and average Digital Marketing, is the difference between massive growth and total <span className="font-medium text-3xl">invisibility</span>. It's that simple.
              </div>
              <div className="basis-1/4"></div>
            </div>
            <div className="flex flex-row px-8 leading-tight">
              <div className="basis-4/5 text-3xl tracking-wide">
                Engage professionals who've walked the halls of Big Tech, know the inside game, and can put your buisness at the front of the line.
              </div>
              <div className="basis-1/5"></div>
            </div>
          </div>

          <div className="p-20 pb-32 text-center bg-gradient-to-r from-blue-950 to-blue-900 text-white">
            <p className='text-7xl tracking-tighter font-medium leading-tight'>
              We fuel brands with
              <span className="text-7xl italic font-thin"> digital marketing and design solutions </span>
              that spark growth.
            </p>
            <div className="flex justify-center pt-6">
              <button className="flex items-center justify-center px-1 py-2 border border-transparent rounded-full text-white ring-1  ring-fuchsia-700">
                <span className="px-6 text-lg">Get started today</span>
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <svg
                    className="w-4 h-4 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div id="brand">
          <div className="flex justify-center px-9 bg-gray-200">
            <img src="/assets/Brand.png" className='h-fit w-fit mt-10 mb-20' />
          </div>

          <div className="flex flex-row pb-10 bg-gray-200">
            <div className="basis-1/4 flex justify-center">
              <img src="/assets/brand_w1.png" className='h-fit w-fit' />
            </div>
            <div className="basis-1/4 flex justify-center">
              <img src="/assets/brand_w2.png" className='h-fit w-fit' />
            </div>
            <div className="basis-1/4 flex justify-center">
              <img src="/assets/brand_w3.png" className='h-fit w-fit' />
            </div>
            <div className="basis-1/4 flex justify-center">
              <img src="/assets/brand_w4.png" className='h-fit w-fit' />
            </div>
          </div>
        </div>

        <div id="services" className="bg-gradient-to-r from-blue-950 to-blue-900 py-24">
          <div className="flex justify-center">
            <img src="/assets/partners_say.png" className='h-fit w-fit'></img>
          </div>
          <div className='flex flex-row px-40 pt-20'>
            <div className='basis-2/12  content-center'>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full center">
                <svg
                  className="w-4 h-4 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            <blockquote className="basis-8/12 text-white tracking-wide">
              <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p>Lesya Pishchevskaya is a talented, driven marketer who will impress with both her ability to think strategically and for executing effectively. She's a dynamic leader who is skilled at seeing the market opportunity and building a multi-channel strategy designed to drive new pipeline, increase pipeline velocity, and drive win rate. Lesya is a natural collaborator and has been a great partner. In my product marketing role, I enjoyed working with her to build inbound campaigns built on nurture as well as paid and organic search strategies.

                Lesya sees the entire gameboard and knows the adjustments to make-both large and small- to get the best results.</p>
              <div className="flex items-center justify-end gap-3 py-5">
                <img src="logo.png"
                  alt="John Michael" className="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-white">
                    John Michael
                  </p>
                  <p
                    className="text-sm text-white">
                    john@creative-tim.com
                  </p>
                </div>
              </div>
            </blockquote>
            <div className='basis-2/12 content-center'>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full center">
                <svg
                  className="w-4 h-4 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className='px-14 py-20'>
            <div className="border-solid border-2 rounded-2xl border-white px-11 py-20">
              <div className='flex justify-center pb-24'>
                <img src="/assets/services.png" className='w-fit h-fit' />
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <div className="flex flex-col pb-32 pt-12">
                  <User className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2 text-white' />
                  <div className="text-white text-2xl py-3">
                    Brand awareness
                  </div>
                  <div className="text-gray-500 text-xl py-2">
                    Are you building a new business or want to raise awareness about your offering?
                  </div>
                  <div className="flex justify-left pl-8 text-lg">
                    <ul className="list-disc text-white">
                      <li>Content marketing (blog and video)</li>
                      <li>SEO</li>
                      <li>Social media (organic and paid)</li>
                      <li>Influencer marketing</li>
                      <li>Events, sponsorships and partnerships</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col pb-32 pt-12">
                  <Award className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2 text-white' />
                  <div className="text-white text-2xl py-3">
                    Lead Generation
                  </div>
                  <div className="text-gray-500 text-xl py-2">
                    Do you want to drive more client meetings, RSVP's, sign ups, or new users?
                  </div>
                  <div className="flex justify-left pl-8 text-lg">
                    <ul className="list-disc text-white">
                      <li> Paid ads (search and social)</li>
                      <li>Email/SMS marketing</li>
                      <li>Webinars</li>
                      <li>Direct mail</li>
                      <li>Referrals and affiliate marketing</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col pb-32 pt-12">
                  <User className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2 text-white' />
                  <div className="text-white text-2xl py-3">
                    Customer Success & Retention
                  </div>
                  <div className="text-gray-500 text-xl py-2">
                    Do you want your customer to keep coming back and buying from you?
                  </div>
                  <div className="flex justify-left pl-8 text-lg">
                    <ul className="list-disc text-white">
                      <li>Client success and onboarding processes</li>
                      <li>Educational content</li>
                      <li>Upsell and cross-sell campaigns</li>
                      <li>Referral programs</li>
                      <li>Reviews</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col pb-32 pt-12">
                  <Briefcase className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2 text-white' />
                  <div className="text-white text-2xl py-3">
                    B2B Enterprise Consulting
                  </div>
                  <div className="text-gray-500 text-xl py-2">
                    Are you a business-to-business company and need assistance with making processes more efficient and/or your campaigns more effective?
                  </div>
                  <div className="flex justify-legft pl-8 text-lg">
                    <ul className="list-disc text-white">
                      <li>Marketing and cross-functional collaborative process (sales, product, developers)</li>
                      <li>Budget forecasting</li>
                      <li>Analytics/Measurement dashboards creation</li>
                      <li>Multi-touch point campaign design and execution</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col pb-32 pt-12">
                  <Code className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2 text-white' />
                  <div className="text-white text-2xl py-3">
                    Web & App Development
                  </div>
                  <div className="text-gray-500 text-xl py-2">
                    Ready to build your website or optimize your app? We’d love to partner and help you.
                  </div>
                  <div className="flex justify-left pl-8 text-lg">
                    <ul className="list-disc text-white">
                      <li> Design new website optimized for your top conversion goals</li>
                      <li>Develop your website or app</li>
                      <li>Optimize your website or app for SEO</li>
                      <li>Design collateral for your clients & marketing team</li>
                      <li>Events, Sponsorship & Partnerships</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col pb-32 pt-12">
                  <BarChart2 className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2 text-white' />
                  <div className="text-white text-2xl py-3">
                    Analytics & Dashboards
                  </div>
                  <div className="text-gray-500 text-xl py-2">
                    Working on bringing all your data in one beautiful dashboard? We're here to help with:
                  </div>
                  <div className="flex justify-left pl-8 text-lg">
                    <ul className="list-disc text-white">
                      <li> identify your "north star" metric</li>
                      <li>build a "one-stop" dashboard with your key growth metrics</li>
                      <li>bring data together from different sources</li>
                      <li>visualize your data & metrics</li>
                      <li>optimize your current analytics & measurement solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="flex items-center justify-center px-1 py-2 border border-transparent rounded-2xl text-white  ring-1   ring-fuchsia-700">
                  <span className="px-4 text-2xl">Schedule Discussion</span>
                  <div className="flex items-center justify-center w-8 h-8 bg-none rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="steps" className='bg-gray-200'>
          <div className="pt-14 pb-24 px-11 leading-none">
            <div className="text-[81px] px-20 text-left">Take four steps to accelerate your <span className='text-[81px] italic text-gray-500'>growth</span></div>
          </div>
          <div className="grid grid-cols-4 px-11 mb-24">
            <div className='flex flex-col'>
              <div className='text-xl pb-6'><span className='text-gray-500 text-gl'>01. </span> Kick-off Meeting</div>
              <div className="flex justify-left pl-8">
                <ul className="list-disc text-gray-500 text-xs">
                  <li>We'll kick things off with a call to get to know your business and its unique needs. During this conversation we'll discuss your current marketing strategy, success metrics, and your marketing & growth goals.</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='text-xl pb-6'><span className='text-gray-500 text-gl'>02. </span> Assestment</div>
              <div className="flex justify-left pl-8">
                <ul className="list-disc text-gray-500 text-xs">
                  <li>During this stage, we will work through all the inputs you've given us to analyze where you are on your marketing journey, capitalize on wins, and identify opportunities to help you reach your goals.</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='text-xl pb-6'><span className='text-gray-500 text-gl'>03. </span> Receive Your Marketing Blueprint</div>
              <div className="flex justify-left pl-8">
                <ul className="list-disc text-gray-500 text-xs">
                  <li>We'll craft a tailored, results-driven strategy for your business. This could include an email marketing strategy targeting new prospects or reengaging your customers, a website revamp to drive more conversions, or a paid or organic media strategy to raise awareness and/or convert at a higher rate.</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='text-xl pb-6'><span className='text-gray-500 text-gl'>04. </span> Watch your business grow</div>
              <div className="flex justify-left pl-8">
                <ul className="list-disc text-gray-500 text-xs">
                  <li>Now, we'll embark on a long-term journey with you to implement and optimize the plan you approved. Leveraging the marketing blueprint for your company, we'll dive into execution of each channel & tactic. You will monitor progress and approve optimizations along the way.</li>
                </ul>
              </div>
            </div>
            <div className='pt-36 border border-x-solid border-x border-x-gray-300'>
              <div className='w-full h-80 border-t-2 border-t-fuchsia-700 border-dashed rounded-t-full pt-36'>
                <Edit className="h-12 w-12 !rounded-full object-cover object-center border-4 border-gray-300 bg-white-200 border-solid ml-[140px] mt-[-150px] text-gray-500 bg-white" />
              </div>
            </div>
            <div className='pt-36 border border-r-solid border-r border-r-gray-300'>
              <div className='w-full h-80 border-t-2 border-t-fuchsia-700 border-dashed rounded-t-full pt-36'>
                <Target className="h-12 w-12 !rounded-full object-cover object-center border-4 border-gray-300 bg-white-200 border-solid ml-[140px] mt-[-150px] text-gray-500 bg-white" />
              </div>
            </div>
            <div className='pt-36 border border-r-solid border-r border-r-gray-300'>
              <div className='w-full h-80 border-t-2 border-t-fuchsia-700 border-dashed rounded-t-full pt-36'>
                <Clock className="h-12 w-12 !rounded-full object-cover object-center border-4 border-gray-300 bg-white-200 border-solid ml-[140px] mt-[-150px] text-gray-500 bg-white" />
              </div>
            </div>
            <div className='pt-36 border border-r-solid border-r border-r-gray-300'>
              <div className='w-full h-80 border-t-2 border-t-fuchsia-700 border-dashed rounded-t-full pt-36'>
                <CloudLightning className="h-12 w-12 !rounded-full object-cover object-center border-4 border-gray-300 bg-white-200 border-solid ml-[140px] mt-[-150px] text-gray-500 bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div id="blog" className='bg-gradient-to-r from-blue-950 to-blue-900'>
          <div className='py-72 px-32'>
            <div className='text-[53px] pb-16 text-white'>Spark25 Blog</div>
            <div className='pl-24 grid grid-cols-3 gap-10 pb-96'>
              <div className='flex flex-col'>
                <img src="/assets/blog1.png"></img>
                <div className='py-8 text-white text-sm'>12 - 2024</div>
                <div className='text-white text-sm'>Lorem ipsum sit amet</div>
                <div className='text-white text-sm'>Lorem ipsum sit amet</div>
              </div>
              <div className='flex flex-col'>
                <img src="/assets/blog2.png"></img>
                <div className='py-8 text-white text-sm'>12 - 2024</div>
                <div className='text-white text-sm'>Lorem ipsum sit amet</div>
                <div className='text-white text-sm'>Lorem ipsum sit amet</div>
              </div>
              <div className='flex flex-col'>
                <img src="/assets/blog3.png"></img>
                <div className='py-8 text-white text-sm'>12 - 2024</div>
                <div className='text-white text-sm'>Lorem ipsum sit amet</div>
                <div className='text-white text-sm'>Lorem ipsum sit amet</div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-10 px-10'>
              <div className='flex flex-col justify-left'>
                <div className='text-3xl text-white'>GET OUR WEEKLY</div>
                {/* <div className='text-6xl text-blue-600'>NEWSLETTER</div> */}
                <img src="/assets/newsletter.png" className='w-fit h-fit pt-5'></img>
              </div>
              <div>
                <div className='text-3xl text-white'>
                  Get weekly updates on the newest design stories, case studies and tips right in your mailbox.
                </div>
                <div className='text-3xl text-white'>
                  Subscribe now!
                </div>
              </div>
            </div>
            <div className="card-mail flex items-center my-24 mb-11 px-10">
              <input type="email" className="border-l border-t border-b border-gray-200 rounded-l-full w-full text-2xl px-6 py-2" placeholder="Email Address"></input>
              <button className="text-white font-bold capitalize px-3 py-2 text-2xl rounded-r-full px-6 tracking-widest bg-gradient-to-r from-fuchsia-700 to-fuchsia-400">SUBSCRIBE</button>
            </div>
            <div className='text-center text-lg italic text-white'>Your email is safe with us, we dont spam.</div>
          </div>
        </div>

        <div id="about-us" className='px-14 py-28 bg-gray-200'>
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex flex-col pt-11'>
              <div className='text-[56px] font-medium leading-none'>About us</div>
              <div className='text-3xl text-gray-500 pb-8 leading-none'>Spark25 is your go-to full-stack marketing partner</div>
              <div className='text-sm pb-8'>From high-impact go-to-market campaigns to technical search engine optimization (SEO), our combined 50+ years of marketing expertise will help you achieve sustainable growth.
              </div>
              <div className='text-sm'>
                We've worked with Meta's and Google's of the world, as well as small growing startups and ad agencies, and we've learned to see the “big picture” and excel in executing campaigns across organic social, paid ads, SEO, email, webinars, events, affiliate marketing, influencer marketing, referrals, reviews, and more.
              </div>
              <div className="flex items-center justify-start gap-3 pt-24">
                <img src="logo.png"
                  alt="Lesya Pishchevskaya" className="relative inline-block h-14 w-14 !rounded-full object-cover object-center" />
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold">
                    Lesya Pishchevskaya
                  </p>
                  <p
                    className="text-xl text-gray-500">
                    Founder
                  </p>
                </div>
              </div>
            </div>
            <img src="/assets/rectangle.png"></img>
          </div>
          <div className='text-center text-6xl py-14'>Our Values</div>
          <div className='text-center text-3xl pb-20 text-gray-500'>We're excited to provide stellar customer service to you.</div>
          <div className='grid grid-cols-3 gap-20 px-60'>
            <div className='flex flex-col items-center'>
              <ThumbsUp className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2' />
              <div className='text-xl text-center p-5'>Stay authentic, be yourself.</div>
            </div>
            <div className='flex flex-col items-center'>
              <CloudLightning className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2' />
              <div className='text-xl text-center p-5'>Spark creativity with a scoop of data</div>
            </div>
            <div className='flex flex-col items-center'>
              <Target className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2' />
              <div className='text-xl text-center p-5'>Approach with a solution-focused mindset</div>
            </div>
            <div className='flex flex-col items-center'>
              <Repeat className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2' />
              <div className='text-xl text-center p-5'>Pivot and adapt as needed</div>
            </div>
            <div className='flex flex-col items-center'>
              <BarChart2 className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2' />
              <div className='text-xl text-center p-5'>Grow from wins and mistakes a like.</div>
            </div>
            <div className='flex flex-col items-center'>
              <User className='h-14 w-14 border border-solid border-2 rounded-lg border-fuchsia-700 p-2' />
              <div className='text-xl text-center p-5'>Work hard and have a little fun.</div>
            </div>
          </div>
        </div>

        <div id="footer" className='bg-gradient-to-r from-blue-950 to-blue-900 p-5'>
          <div className='rounded-3xl bg-white pt-14 pb-6 px-96 text-center'>
            <div className='text-5xl'>Ready To  Launch Your Digital Marketing  Project</div>
            <div className='text-2xl'>Ready to launch your digital marketing project? Let us craft strategies that drive results and growth</div>
            <div className="flex justify-center pt-6">
              <button className="flex items-center justify-center px-1 py-2 border border-transparent rounded-full bg-white ring-1 ring-fuchsia-700">
                <span className="px-6 text-lg">Get started today</span>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  <svg
                    className="w-4 h-4 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='pt-28 px-10'>
            <div className='grid grid-cols-2 gap-24 pb-20'>
              <div className='flex flex-col'>
                <div className="flex items-center justify-start gap-3">
                  <img src="logo.png"
                    alt="Lesya Pishchevskaya" className="relative inline-block h-24 w-24 object-center" />
                  <p className="text-6xl px-3 text-white">
                    Spark 25
                  </p>
                </div>
                <div className='pt-10 pr-20 text-white'>Specializes in innovative digital marketing strategies, blending creativity and data-driven insights to elevate your brand's online presence and drive measurable growth.</div>
              </div>
              <div className='grid grid-cols-3 gap-5'>
                <div className='flex flex-col text-white'>
                  <div className='text-lg text-bold pb-8 pt-4'>MENU</div>
                  <div className='text-lg pb-6'>Home</div>
                  <div className='text-lg pb-6'>Service</div>
                  <div className='text-lg pb-6'>Our Work</div>
                  <div className='text-lg pb-6'>Project</div>
                  <div className='text-lg pb-6'>About Us</div>
                </div>
                <div className='flex flex-col text-white'>
                  <div className='text-lg text-bold pb-8 pt-4'>SERVICES</div>
                  <div className='text-lg pb-6'>Web&App Dvelopment</div>
                  <div className='text-lg pb-6'>Social Media Marketing</div>
                  <div className='text-lg pb-6'>Email Marketing</div>
                  <div className='text-lg pb-6'>SEO</div>
                  <div className='text-lg pb-6'>Creative & Content</div>
                </div>
                <div className='flex flex-col text-white'>
                  <div className='text-lg text-bold pb-8 pt-4'>SOCIAL MEDIA</div>
                  <div className='text-lg pb-6'>Instagram</div>
                  <div className='text-lg pb-6'>Twitter</div>
                  <div className='text-lg pb-6'>Linkedin</div>
                  <div className='text-lg pb-6'>Facebook</div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 text-white border-t-2 border-gray-500 pt-5'>
              <div className='text-lg'>2024SPARK25.All Rights Reserved</div>
              <div className='text-lg text-right'>Terms & Conditions | Privacy Policy</div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default HomePage;