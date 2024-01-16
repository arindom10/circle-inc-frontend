import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const metaDescription = `Circle Incorporated is a dynamic and innovative software company at the forefront of delivering cutting-edge web development services and comprehensive software solutions. With a commitment to excellence and a passion for technology, we empower businesses to thrive in the digital landscape.

Our team of skilled professionals brings a wealth of experience to the table, blending creativity with technical expertise to craft custom web solutions tailored to meet the unique needs of our clients. Whether you're a startup looking to establish a strong online presence or an established enterprise seeking to enhance your digital capabilities, Circle Incorporated is your strategic partner in achieving success.

At the core of our services is web development, where we leverage the latest technologies and industry best practices to build responsive, user-friendly, and scalable websites. From concept to deployment, our streamlined development process ensures a seamless and efficient journey for our clients.

In addition to web development, Circle Incorporated specializes in providing versatile software solutions designed to optimize business operations. Our team excels in developing bespoke software applications, addressing specific challenges and enhancing overall efficiency. Whether it's a customer relationship management (CRM) system, an e-commerce platform, or a custom business application, we have the expertise to bring your vision to life.

What sets us apart is our dedication to client satisfaction. We prioritize open communication, collaboration, and a deep understanding of our clients' goals. This client-centric approach allows us to build lasting relationships and deliver solutions that not only meet but exceed expectations.

Choose Circle Incorporated as your software partner, and embark on a journey of digital transformation. Let us empower your business to thrive in the ever-evolving digital landscape with our expertise in web development and innovative software solutions.`;

export const metadata: Metadata = {
  title: "Circle Incorporated | Enhance Your Website",
  description: metaDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
