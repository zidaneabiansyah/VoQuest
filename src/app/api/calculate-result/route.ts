import { NextRequest, NextResponse } from "next/server";
import { CategoryCode } from "@/lib/constants/categories";
import { calculateRecommendations } from "@/lib/utils/scoring";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { scores } = body as { scores: Record<CategoryCode, number> };

    // Validate scores
    if (!scores || typeof scores !== "object") {
      return NextResponse.json(
        { error: "Invalid scores data" },
        { status: 400 }
      );
    }

    // Calculate recommendations
    const recommendations = calculateRecommendations(scores);

    if (recommendations.length === 0) {
      return NextResponse.json(
        { error: "Unable to calculate recommendations" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      recommendations,
      scores,
    });
  } catch (error) {
    console.error("Error calculating result:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
