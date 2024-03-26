

const Contact = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center mt-10">Contact Information:</h1>
        <div className="flex flex-col md:flex-row gap-10 bg-base-200 justify-around p-16 rounded-2xl mt-5">
          <div>
            <div className="text-xl">
                <h2 className="text-2xl mb-2 font-bold">Bangladesh: </h2>
              <h2 className="font-bold">CEO Contact Details:</h2>
              <p>Email: shahriar3809@gmail.com</p>
              <p>Phone: +8801838-838226</p>
            </div>
            <br />
            <div className="text-xl">
              <h2 className="font-bold">Office Address:</h2>
              <p>College Road, 34/2</p>
              <p>Maijdee, Noakhali, Bangladesh.</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Outside Bangladesh:</h1>
            <div>
              <h2 className="font-bold">Office Address:</h2>
              <p>Pink Road, 34/2</p>
              <p>Maijdee, Noakhali, Bangladesh.</p>
            </div>
            <br />
            <div>
              <h2 className="font-bold">Office Address:</h2>
              <p>Bangladesh Road, 34A/4</p>
              <p>Kolkata, India</p>
            </div>
            <br />
            <div>
              <h2 className="font-bold">Office Address:</h2>
              <p>BM College Road, 3A/2</p>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;