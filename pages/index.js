import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>axieschool.it</title>
        </Head>
        <Container>
          <section class='text-gray-600 body-font'>
            <div class='mx-auto flex py-10 md:py-36 pb-60 items-center justify-center flex-col'>
              <img
                class='lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded'
                alt='hero'
                src='/logo.png'
              />
              <div class='text-center lg:w-2/3 w-full -mt-8'>
                <h1 class='font-bold leading-tight tracking-tighter sm:text-5xl text-3xl mb-4 text-gray-800 dark:text-white antialiased'>
                  We are Axie School
                </h1>
                <p class='mb-8 leading-relaxed text-gray-700 dark:text-gray-200'>
                  Join our growing community of Axies lovers. We are building
                  strong teams ready to challenge the entire axie world. Every
                  week we have some slot available for scholarship. Join the
                  server, and compile the form if you want be part of this
                  journey with us!
                </p>
                <div class='grid md:grid-cols-2 place-items-center justify-center gap-4 md:gap-6 w-full'>
                  <a
                    target='_blank'
                    href='https://discord.gg/4RCFsVMeMw'
                    class='w-full dark:text-gray-900 dark:bg-white text-gray-800 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg'>
                    Join Discord
                  </a>
                  <a
                    target='_blank'
                    href='https://docs.google.com/forms/d/e/1FAIpQLSeNtBs0mG4xD97RZGJSCMHMII0BaCu1baL_y3Wq6jqB06kzTA/viewform'
                    style={{ backgroundColor: '#e94661' }}
                    class='text-white border-0 py-2 px-6 focus:outline-none rounded text-lg'>
                    Fill the Form
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
