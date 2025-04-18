"use client"
import { Label } from "@/components/atoms/label"
import { Input } from "@/components/atoms/input"
import { Span } from "@/components/atoms/span"
import { Button } from "@/components/atoms/buttons"
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-night">
            <div className="rounded-xl overflow-hidden bg-blackOlive w-[30%] min-w-100 h-[90%] flex shadow-md flex-col">
                <div className="bg-jonquil w-full h-[30%] flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-blackOlive font-bold">ToDo Universe</h1>
                    <span className="text-blackOlive text-sm">Eleve sua produtividade</span>
                </div>
                <div className=" h-full flex justify-center  pt-10">
                    <div className="flex flex-col items-center justify-center h-[70%] w-[80%]">
                        <form action="" className="flex gap-5 flex-col items-center justify-center w-full h-full">
                            <div className="flex flex-col items-start  gap-3  w-[85%]">
                                <Label>Email</Label>
                                <Input type="email" name="email" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="flex flex-col items-start gap-3   w-[85%]">
                                <Label>Password</Label>
                                <Input type="password" name="password" id="password" placeholder="******" />
                                <Span>Esqueceu sua senha?</Span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <Button 
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const email = document.getElementById('email').value;
                                        const password = document.getElementById('password').value;
                                        console.log('Email:', email);
                                        console.log('Senha:', password);
                                        navigate('/dashboard');
                                    }}
                                >
                                    Entrar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

