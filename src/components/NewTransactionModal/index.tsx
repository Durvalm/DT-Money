import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal(){
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <CloseButton>
                    <X />
                </CloseButton>

                <form>
                <input type="text" placeholder="Description" required />
                <input type="number" placeholder="Price" required />
                <input type="text" placeholder="Category" required />

                <TransactionType>
                    <TransactionTypeButton variant='income' value='income'>
                        <ArrowCircleUp size={24} />
                        Deposit
                    </TransactionTypeButton >
                    <TransactionTypeButton variant='outcome' value='outcome'>
                        <ArrowCircleDown size={24} />
                        Withdraw
                    </TransactionTypeButton>
                </TransactionType>

                <button type="submit">
                    Submit
                </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}