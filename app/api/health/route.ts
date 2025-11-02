import db from "@/lib/server/Database";

export async function GET() {
    let dbHealth: boolean;
    let dbRespTime = 0;
    try {
        const start = Date.now();
        const data = await db.prepare("SELECT 1").get();
        dbRespTime = Date.now() - start;
        dbHealth = data !== undefined;
    } catch (error) {
        dbHealth = false;
        console.error("Database health check failed:", error);
    }

    const healthStatus = {
        api: "ok",
        database: dbHealth ? "healthy" : "unhealthy",
        databaseResponseTimeMs: dbRespTime,
    }

    return new Response(JSON.stringify(healthStatus), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}