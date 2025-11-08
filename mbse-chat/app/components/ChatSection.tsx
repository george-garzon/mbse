import PromptBox from "./PromptBox"
import GradientText from "@/app/components/GradientText";

export default function ChatSection() {
    return (
        <div className="relative flex h-full w-full overflow-hidden flex-grow z-[1]">
            <div className="flex overflow-auto size-full flex-col relative">
                <div className="flex flex-col flex-grow selection-accent">
                    <div className="flex flex-col mt-[28vh] mx-[var(--chat-padding)] text-center">
                        <h1 className="text-[44px] font-semibold tracking-tight textPrimary">
                            What do you want to build?
                        </h1>

                        {/* Desktop Gradient Text */}
                        <div className="mb-8 hidden md:block">
                            <GradientText
                                colors={['#1B2339', '#1588FC', '#A54941', '#BBBDB6', '#1B2339']}
                                animationSpeed={3}
                                showBorder={false}
                                className="custom-class"
                            >
                                <span className="textSecondary dark:text-white font-medium"> Arcfield presents </span>
                                Intelligent MBSE
                                <span className="textSecondary dark:text-white font-medium"> on Desktop </span>
                            </GradientText>
                        </div>

                        {/* Mobile fallback text */}
                        <p className="mb-8 block md:hidden text-muted text-sm font-medium">
                            Arcfield presents Intelligent MBSE
                        </p>
                    </div>

                    <PromptBox />
                    <div className="pb-[var(--chat-padding)]"></div>
                </div>
            </div>
        </div>
    )
}
