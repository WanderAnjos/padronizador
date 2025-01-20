import { Plus, Trash } from "lucide-react";

import { useState } from "react";
import { ComboboxProject } from "./combobox-project";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type listClass = {
    name: string,
    project: string
}

export default function Todo() {

    const [listClass, setListClass] = useState<listClass[]>([]);

    function handleAddItem() {
        setListClass([...listClass, { name: "Teste", project: "Teste" }]);
    }

    function handleRemoveItem(index: number) {
        setListClass(listClass.filter((_, i) => i !== index));
    }

    return (
        <div className="">
            <div className="flex gap-4">
                <ComboboxProject />
                <Input onChange={(e) => console.log(e.target.value)} type="text" placeholder="Nome da classe" />
                <div>
                    <Button onClick={handleAddItem} variant="outline" size="icon"><Plus size={18} /></Button>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">

                {listClass.map((item, index) => (
                    <div className="flex justify-between border rounded-lg p-2 gap-2" key={index}>
                        <div className="flex gap-2 justify-start items-center">
                            <p className="text-sm italic">{item.name}</p>
                            <Badge variant="secondary">{item.project}</Badge>
                        </div>
                        <div>
                            <Button onClick={() => handleRemoveItem(index)} variant="ghost" size="icon"><Trash size={18} /></Button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}