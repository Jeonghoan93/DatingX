import IconTextDesc from "@/components/IconTitleDesc";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePrivacyTip, MdSecurityUpdateGood } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import {
  SiJirasoftware,
  SiKingstontechnology,
  SiSurrealdb,
} from "react-icons/si";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-3">
              <div>
                <span className="rounded-xl px-2 py-1 border-[1px] shadow text-white p-semibold-14 bg-sky-600">
                  Superior AI technology
                </span>
              </div>

              <h2 className="h2-bold">
                Get More Matches with AI trained for Dating Apps
              </h2>
            </div>
            <p className="p-regular-14 md:p-regular-16">
              We are <span className="font-semibold">product driven</span>,
              specialize in crafting authentic, engaging dating profiles that
              truly reflect your personality, significantly increasing your
              appeal on platforms like{" "}
              <span className="font-semibold">Tinder, Hinge, and Bumble.</span>
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Upload your photos</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-10 md:py-20">
        <div className="w-full flex flex-col gap-3 sm:gap-4 items-center justify-center">
          <span className="text-gray-500 p-semibold-14 sm:p-semibold-16">
            Works for all dating apps
          </span>
          <Image
            src="/assets/images/dating-apps.svg"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-10 md:py-20">
        <div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <IconTextDesc
              icon={<MdOutlinePrivacyTip size={26} />}
              title={"Privacy and Security"}
              desc={
                "Your privacy is our priority. Enjoy exclusive dating experiences with full confidentiality and robust data security."
              }
            />

            <IconTextDesc
              icon={<SiSurrealdb size={26} />}
              title={"AI-Powered Precision"}
              desc={
                "We use industry's the most advanced AI infrastructures avaialble, Today."
              }
            />

            <IconTextDesc
              icon={<SiJirasoftware size={26} />}
              title={"Product Driven"}
              desc={
                "We are professional software engineers not marketers like others. We guarantee the best value for your money."
              }
            />
          </div>

          <div className="flex flex-col gap-10">
            <IconTextDesc
              icon={<RiSecurePaymentLine size={26} />}
              title={"Secure Payment"}
              desc={
                "Trust is everything. We have built our advanced security protocols and encrypted payment system."
              }
            />

            <IconTextDesc
              icon={<MdSecurityUpdateGood size={26} />}
              title={"User-Friendly Experience"}
              desc={
                "Our app is designed for simplicity and ease. Upload photos, wait few hours, and recieve your profile photos."
              }
            />

            <IconTextDesc
              icon={<SiKingstontechnology size={26} />}
              title={"Authenticity at Heart"}
              desc={
                "Our AI is trained specifically for dating apps to create the best possible dating profile."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
