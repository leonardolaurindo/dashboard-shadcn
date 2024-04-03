import Card, { CardContent, CardDebit, CardDebitProps, CardParcels, CardParcelsProps, CardProps } from "@/components/Cards";
import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, CalendarDays, HandCoins } from "lucide-react";

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
  },
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



const parcelsData: CardParcelsProps[] = [
  {
    debtName: "Financiamento Casa",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48,
    icon: HandCoins,
  },
  {
    debtName: "Financiamento Moto",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48,
    icon: HandCoins,
  },
  {
    debtName: "Viagem",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48,
    icon: HandCoins,
  }
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
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
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
        </div>
        <CardContent>
          {parcelsData.map((d, i) =>
            <CardParcels
              key={i}
              icon={d.icon}
              debtName={d.debtName}
              debtValue={d.debtValue}
              debtMonth={d.debtMonth}
              remaningMonth={d.remaningMonth}
            />
          )}
        </CardContent>
      </section>

    </div>
  );
}
