import React, { useState, useTransition } from 'react'
import TabButton from '../tabButton';

const PRESENTE = [
    {
        title: "Quarto",
        id: "Quarto",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Sala",
        id: "Sala",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Cozinha",
        id: "Cozinha",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Banheiro",
        id: "Banheiro",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Aleatório",
        id: "Aleatório",
        content: (
            <div>

            </div>
        )
    },
]

function Presentes() {
    const [tab, setTab] = useState("Sala");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <div>
            <div className="mt-8 flex text-sm flex-row lg:text-base justify-start">
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Sala")}
                    active={tab === "Sala"}
                >
                    {" "}
                    <span>Sala</span> <br />  {" "}

                </TabButton>
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Cozinha")}
                    active={tab === "Cozinha"}
                >
                    {" "}
                    <span>Cozinha</span> <br />  {" "}

                </TabButton>


                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Quarto")}
                    active={tab === "Quarto"}
                >
                    {" "}
                    <span>Quarto</span> <br />  {" "}

                </TabButton>
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Banheiro")}
                    active={tab === "Banheiro"}
                >
                    {" "}
                    <span>Banheiro</span> <br />  {" "}

                </TabButton>
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Aleatório")}
                    active={tab === "Aleatório"}
                >
                    {" "}
                    <span>Aleatório</span> <br />  {" "}

                </TabButton>

            </div>
            {PRESENTE.find((t) => t.id === tab)?.content}
        </div>
    )
}

export default Presentes;
