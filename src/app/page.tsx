import BarChart from "@/components/BarChart";
import Card, { CardContent, CardDebit, CardDebitProps, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, CalendarDays } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total em Dívidas",
    amount: "R$9.231,89",
    description: "Uma diminuição de 0,8%",
    icon: DollarSign,
    style: "border-hunas",
    color: "text-hunas"
  },
  {
    label: "Total em Parcelas",
    amount: "R$ 784,35",
    description: "3,2% do total das dividsa",
    icon: CalendarDays,
    style: "border-orange-400",
    color: "text-orange-400"
  },
  {
    label: "Parcelas Restantes",
    amount: "32",
    description: "Você já quitou 30%",
    icon: CreditCard,
    style: "border-lime-600",
    color: "text-lime-600"
  },
  {
    label: "Mais um Card",
    amount: "+00",
    description: "+00,0% mais um dado",
    icon: Activity,
    style: "border-rose-300",
    color: "text-rose-600"
  },
];

const userDebidData: CardDebitProps[] = [
  {
    title: "Nome da Divida",
    icon: CreditCard,
    contractedValue: "R$ 30.000,00",
    parcelValue: "R$ 879,32",
    remaningValue: "13.400,32",
    totalMonth: 46,
    remainingMonths: 19,
    feesRate: "1,75%",
    amortSystem: "SAC",
    totalFees: "R$ 38,574,42"
  }

]

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmout: "R$1.999,00"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    saleAmout: "R$1.999,00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmout: "R$39,00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmout: "R$299,00"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
      sm:grid-cols-2
      xl:grid-cols-4">
        {cardData.map((d, i) =>
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
            style={d.style}
            color={d.color}
          />
        )}
      </section>
      <section>

        {userDebidData.map((d, i) => (
          <CardDebit key={i}
            title={d.title}
            icon={d.icon}
            contractedValue={d.contractedValue}
            parcelValue={d.parcelValue}
            remaningValue={d.remaningValue}
            totalMonth={d.totalMonth}
            remainingMonths={d.remainingMonths}
            feesRate={d.feesRate}
            amortSystem={d.amortSystem}
            totalFees={d.totalFees}
          />
        ))}

      </section>
      <section className="grid grid-cols-1 gap-4 transition-all
      lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Vendas Recentes</p>
            <p className="text-sm text-gray-400">Você fez 265 vendas esse mês</p>
          </section>
          {userSalesData.map((d, i) => (
            <SalesCard key={i}
              email={d.email}
              name={d.name}
              saleAmout={d.saleAmout}
            />
          ))}
        </CardContent>
        {/*  */}

      </section>
    </div>
  );
}
