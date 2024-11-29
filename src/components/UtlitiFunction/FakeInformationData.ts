export interface Highlight {
  id: number;
  name: string;
  img: string;
  title: string;
  headline: string;
  description: string;
}

export const highlightData: Highlight[] = [
  {
    id: 1,
    name: "Savings",
    img: "/Photo/piggy-bank.png",
    title: "Your Financial Goals, Our Expertise",
    headline: "Comprehensive Reporting",
    description:
      "We provide tailored savings plans that align with your goals and help secure your financial future.",
  },
  {
    id: 2,
    name: "Tax Management",
    img: "/Photo/money-bag.png",
    title: "Relax. We'll Manage Your Tax",
    headline: "Effortless Compliance",
    description:
      "Our expert tax management solutions ensure compliance while maximizing your savings.",
  },
  {
    id: 3,
    name: "Investment Planning",
    img: "/Photo/targeted.png",
    title: "Raise Your Expectations",
    headline: "Industry Expertise",
    description:
      "Leverage our investment expertise to grow your wealth with tailored financial strategies.",
  },
  {
    id: 4,
    name: "Industry Expertise",
    img: "/Photo/customer-satisfaction.png",
    title: "Achieve Beyond Limits",
    headline: "Strategic Insights",
    description:
      "With years of experience, we provide insights to help you make smarter financial decisions.",
  },
];

export interface ServiceData {
  id: number;
  name: string;
  img: string;
  description: string;
}

export const serviceData: ServiceData[] = [
  {
    id: 1,
    name: "Payroll Service",
    img: "/Photo/salary.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
  },
  {
    id: 2,
    name: "Business Tax Preparation",
    img: "/Photo/preparation.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
  },
  {
    id: 3,
    name: "Tax Management",
    img: "/Photo/tax.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
  },
  {
    id: 4,
    name: "Incorporation Services",
    img: "/Photo/tax.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
  },
  {
    id: 5,
    name: "Small Business Accounting",
    img: "/Photo/fund.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
  },
  {
    id: 6,
    name: "IRS Problem Resolution",
    img: "/Photo/resolute.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
  },
];
