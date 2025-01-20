import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { cn } from "@/lib/utils";
import { Copy } from 'lucide-react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import Todo from './todo';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from './ui/label';
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";

export default function MainForm() {

    const form = useForm()
    const date = new Date();

    const [hasClass, setHasClass] = useState(false);
    const [hasReport, setHasReport] = useState(false);


    const [hasVersion, setHasVersion] = useState(false);
    const [hasLib, setHasLib] = useState(false);

    const detalhamento =
        `Detalhes do processo: ${hasVersion ? "- Processo precisa de nova versão do sistema.\n" : ""}${hasLib ? "- Processo precisa de uma nova biblioteca no sistema (repodynclass).\n" : ""}
Detalhamento:
asdasdasdasd

Outras informações:
commit: Processo Nº0001 / 2025 - Nome do processo`;

    return (
        <div>
            <Form {...form}>
                <div className="flex flex-col gap-2">

                    <div className="flex gap-5">
                        <FormField
                            control={form.control}
                            name="userName"
                            render={(field) => (
                                <FormItem className="min-w-[100px]">
                                    <FormLabel>Nº do Processo <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder={`Ex.: 00000 / ${date.getFullYear()} `} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="userNames"
                            render={(field) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Titulo do processo <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o titulo do processo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="descricao"
                        render={(field) => (
                            <FormItem className="min-w-[100px]">
                                <FormLabel>Descrição das Alterações <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Textarea rows={5} placeholder="Digite uma breve descrição das alterações" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-2 py-2">
                        <FormField
                            control={form.control}
                            name="versao"
                            render={({ field }) => (
                                <FormItem className="flex gap-2 space-y-0 p-4 border rounded-lg">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={() => {
                                                field.onChange();
                                                setHasVersion(!hasVersion);
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        <div className="cursor-pointer">
                                            <h1 className="font-semibold">Depende de nova versão</h1>
                                            <p className="font-normal text-sm text-zinc-400">O processo precisa de uma nova versão para funcionar.</p>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="biblioteca"
                            render={({ field }) => (
                                <FormItem className="flex gap-2 space-y-0 p-4 border rounded-lg">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={() => {
                                                field.onChange();
                                                setHasLib(!hasLib);
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        <div className="cursor-pointer">
                                            <h1 className="font-semibold">Depende de nova biblioteca</h1>
                                            <p className="font-normal text-sm text-zinc-400">O processo precisa de publicação de uma nova bibloteca <b>repodynclass</b> para funcionar.</p>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cliente"
                            render={({ field }) => (
                                <FormItem className="flex gap-2 space-y-0 p-4 border rounded-lg">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        <div className="cursor-pointer">
                                            <h1 className="font-semibold">Ajustado no cliente</h1>
                                            <p className="font-normal text-sm text-zinc-400">O processo já foi ajustado no cliente.</p>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="codigo"
                            render={({ field }) => (
                                <FormItem className="flex gap-2 space-y-0 p-4 border rounded-lg">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={() => {
                                                field.onChange();
                                                setHasClass(!hasClass);
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        <div className="cursor-pointer">
                                            <h1 className="font-semibold">Houve alteração de código</h1>
                                            <p className="font-normal text-sm text-zinc-400">O processo teve alteração de código.</p>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <AnimatePresence mode='wait'>
                            {hasClass && (
                                <motion.div
                                    initial={{ opacity: 0, translateY: -20 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ duration: 0.2 }}

                                    className={cn("w-full p-4 border rounded-lg")}
                                >
                                    <div>
                                        <Todo />
                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>

                        <FormField
                            control={form.control}
                            name="relatorio"
                            render={({ field }) => (
                                <FormItem className="flex gap-2 space-y-0 p-4 border rounded-lg">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={() => {
                                                field.onChange();
                                                setHasReport(!hasReport);
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        <div className="cursor-pointer">
                                            <h1 className="font-semibold">Houve alteração de relatório</h1>
                                            <p className="font-normal text-sm text-zinc-400">O processo teve alteração de relatórios.</p>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <div className={cn("w-full p-4 border rounded-lg", !hasReport && "hidden")}>
                            <div>
                                <div>Existe alteracao de relatório</div>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end gap-2 mt-6">
                        <Button type="button" variant="outline">Limpar</Button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button type="submit">Finalizar</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-xl">
                                <DialogHeader>
                                    <DialogTitle>Retorno detalhado.</DialogTitle>
                                    <DialogDescription>
                                        Copie e cole esse conteúdo na descrição do processo.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <Label htmlFor="link" className="sr-only">
                                            Link
                                        </Label>
                                        <Textarea
                                            id="link"
                                            defaultValue={detalhamento}
                                            rows={10}
                                            readOnly
                                        />
                                    </div>
                                    <Button type="submit" size="sm" className="px-3">
                                        <span className="sr-only">Copy</span>
                                        <Copy />
                                    </Button>
                                </div>
                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Voltar
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>


                    </div>
                </div>
            </Form>
        </div>
    )
}