import Head from "next/head";
import React from "react";

function Index() {
  return (
    <>
      <Head>
        <title>RadGear</title>
      </Head>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/899238/pexels-photo-899238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">
                Hey Motorcycle Junkie!
              </h1>
              <p className="mb-5">
                Been waiting for something epic? Your wait is almost over!{" "}
                <br />
                We’re gearing up to launch the ultimate destination for <br />
                motorcycle accessories – <br /> where performance meets style,
                and every ride gets an upgrade. <br />
                Stay tuned. The road ahead just got a whole lot better.
              </p>
              <hr />
              <p className="mt-3">
                Reach out for any queries{" "}
                <a href="mailto:radgearindia@gmail.com">
                  radgearindia@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
