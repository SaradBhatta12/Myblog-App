import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaArrowsTurnRight } from "react-icons/fa6";
const Dyna = (item) => {
  return (
    <div className="upper">
      <div className="head-sec flex items-center justify-between p-10">
        <div className="left flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-[50%]"
            src="https://avatars.githubusercontent.com/u/88665300?s=400&u=8fbf16e60db14babaf0162981a43621320b47249&v=4"
            alt=""
          />
          <div className="bio">
            <h1 className="name text-2xl capitalize">sarad bhatta</h1>
            <p className="date">Apr 19 2024</p>
          </div>
        </div>
        <CiMenuKebab className=" text-2xl" />
      </div>
      <img
        className="w-[90%]  m-auto rounded mb-2"
        src="https://images.pexels.com/photos/19255708/pexels-photo-19255708/free-photo-of-green-hills-around-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />

      <h1 className="title text-3xl w-[90%] m-auto text-center text-[aqua]">
        👉 Lorem ipsum dolor sit amet, consectetur adipisicing.
      </h1>
      <p className="description w-[90%] m-auto text-center text-xl mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
        distinctio exercitationem autem sunt voluptatibus minus temporibus
        reiciendis numquam eveniet aut, molestiae perspiciatis ad quisquam
        ipsum, incidunt iure aspernatur laudantium hic explicabo, voluptate
        magnam. Maxime fugit, quidem omnis quasi quam impedit blanditiis vel
        voluptatum ratione ipsum! Vero fuga harum ullam suscipit repellat
        architecto doloremque aliquam quo possimus dolorum esse ratione quis
        sequi laborum molestiae dolorem nesciunt hic, ipsa quaerat! Deleniti
        accusantium ipsum illum repellendus at neque ea, optio qui soluta, vel,
        laboriosam a tenetur in maiores eaque distinctio culpa earum.... <br />
        omnis ut eveniet accusamus. Consequuntur quam ab deserunt illo,
        voluptatem tempore ut iure quidem aliquam id ipsam? Odit, dolores
        reprehenderit! Sed deleniti, voluptate perferendis maiores sunt libero
        totam. Accusantium, placeat inventore? Accusamus pariatur accusantium
        quasi numquam, necessitatibus a sit officia tenetur! Officiis, dolorum?
        Nulla officia eos dolor explicabo. Iusto voluptatibus est eaque,
        corporis tempore nobis, quaerat maxime voluptatem sint rem officia velit
        id omnis inventore laudantium magni exercitationem totam incidunt.
        Maiores quidem sed a commodi libero inventore ex ipsum, consequuntur
        officiis illum, fuga odit. Molestiae eos est expedita voluptatem,
        blanditiis nisi! Repudiandae labore quod exercitationem voluptatibus,
        consequatur, est dignissimos hic totam ab corporis molestias maxime enim
        eius recusandae, corrupti quisquam. Et!
      </p>
    </div>
  );
};

export default Dyna;
