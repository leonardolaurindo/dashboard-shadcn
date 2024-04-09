import CardInfo, { CardInfoSmall } from "@/components/Cards";
import { CardContent, CardDebit, CardDebitProps, CardParcels, CardParcelsProps, CardProps } from "@/components/Cards";
import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, CalendarDays, HandCoins } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total em Dívidas",
    amount: "R$9.231,89",
    description: "Uma diminuição de 0,8%",
    icon: DollarSign,
    style: "bg-gray-100",
    color: "text-hunas",
  },
  {
    label: "Total em Parcelas",
    amount: "R$ 784,35",
    description: "3,2% do total das dividsa",
    icon: CalendarDays,
    style: "bg-gray-100",
    color: "text-hunas",
  },
  {
    label: "Parcelas Restantes",
    amount: "32",
    description: "Você já quitou 30%",
    icon: CreditCard,
    style: "bg-gray-100",
    color: "text-hunas",
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
    debtName: "Financiamento Casa Teste Nome grande",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48
  },
  {
    debtName: "Financiamento Moto",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48
  },
  {
    debtName: "Viagem",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <PageTitle title="Dívidas" />
      <section className="grid w-full grid-cols-1 gap-1  transition-all
      sm:gap-x-4
      sm:grid-cols-3">
        {cardData.map((d, i) =>
          <CardInfoSmall
            key={i}
            amount={d.amount}
            icon={d.icon}
            label={d.label}
            style={d.style}
            color={d.color}
          />
        )}
      </section>
      <section className="grid grid-cols-1 gap-1 pt-2
      sm:pt-5
      lg:grid-cols-3">

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

        <CardContent className="shadow-lg shadow-black/25">
          <p className="font-semibold pl-2">Proximas parcelas</p>
          {parcelsData.map((d, i) =>
            <CardParcels
              key={i}
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
