'use client';

import { useVibeCookingPresenter } from '@/client/presenters/use-vibe-cooking-presenter';
import { CookingCompletedCard } from '@/components/cooking-completed-card';
import { CookingInstructionCard } from '@/components/cooking-instruction-card';
import { ProgressBar } from '@/components/instruction-progress';
import { Loading } from '@/components/tools/loading';
import { NoContent } from '@/components/tools/no-content';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CookingStatusCard } from '@/components/ui/cooking-status-card';
import { usePageButtons } from '@/hooks/use-buttom-buttons';
import { MicIcon, MicOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const PageContent = () => {
  const { state, actions } = useVibeCookingPresenter();
  const searchParams = useSearchParams();

  // 最後のステップかどうかを判別
  const isLastStep = state.currentStep === state.totalSteps - 1;

  usePageButtons([
    {
      id: 'end-cooking',
      href: `/`,
      children: 'Vibe Cooking をおわる',
    },
  ]);

  useEffect(() => {
    const recipeIds = searchParams.get('recipeIds');
    if (!recipeIds) {
      return;
    }
    actions.setRecipeIds(recipeIds.split(','));
  }, [searchParams, actions]);

  if (state.loading) {
    return <Loading text="レシピを構築しています..." />;
  }

  if (!state.vibeRecipe) {
    return <NoContent text="レシピが見つかりません" />;
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full max-w-[600px] px-4 space-y-4">
        <CookingStatusCard
          recipes={state.recipes.map(recipe => ({
            id: recipe.id,
            name: recipe.title || '',
          }))}
          activeRecipeId={state.activeRecipeId ?? undefined}
        />
      </div>

      <Carousel className="w-[calc(100%-96px)]" setApi={actions.setCarouselApi}>
        <CarouselContent>
          {state.cards.map(card => (
            <CarouselItem key={card.step}>
              <CookingInstructionCard
                step={card.step}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <ProgressBar
        totalSteps={state.totalSteps}
        currentStep={state.currentStep + 1}
      />

      {state.audioRecognitionStatus === 'listening' ? (
        <MicIcon className="h-10 w-10 text-green-500" />
      ) : (
        <MicOffIcon className="h-10 w-10 text-red-500" />
      )}
      {/* 最後のステップの場合に完了メッセージを表示 */}
      {isLastStep && (
        <Link href="/">
          <CookingCompletedCard />
        </Link>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<Loading text="レシピを構築しています..." />}>
      <PageContent />
    </Suspense>
  );
}
