"use client"

import { useCreateOrGetConversation } from '@/features/conversations/api/use-create-or-get-conversation'
import { useMemberId } from '@/hooks/use-member-id'
import { useWorkspaceId } from '@/hooks/use-workspace-id'
import { AlertTriangle, Loader } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Id } from '../../../../../../convex/_generated/dataModel'
import { toast } from 'sonner'
import { Conversation } from "./conversation"

const MemberIdPage = () => {
    const workspaceId = useWorkspaceId()
    const memberId = useMemberId()

    const [conversationId, setConversationId] = useState<Id<"conversations"> | null>(null)

    const { mutate, isPending } = useCreateOrGetConversation()

    useEffect(() => {
        mutate({
            workspaceId, memberId
        }, { onSuccess(data) { setConversationId(data); }, onError(error) { toast.error("Failed to create or get conversation") } })
    }, [memberId, workspaceId, mutate])

    if (isPending) {
        return (
            <div className="flex h-full items-center bg-neutral-900 justify-center">
                <Loader className="size-5 animate-spin text-white" />
            </div>
        )
    }

    if (!conversationId) {
        return (
            <div className="flex flex-col gap-y-2 h-full bg-neutral-900 items-center justify-center">
                <AlertTriangle className="size-5  text-white" />
                <span className='text-sm text-muted-foreground'>Conversation Not found</span>
            </div>
        )
    }


    return <Conversation id={conversationId} />
}

export default MemberIdPage