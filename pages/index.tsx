import Login from "@/components/Login";
import Image from "next/image";

export default function index() {
  return (
    <div>
      <div className="container mx-auto grid lg:grid-cols-2">
        <div className="relative lg:block hidden">
          <Image src="/assets/images/logo.jpeg" alt="picture" layout="fill" />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}
