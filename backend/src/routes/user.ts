import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from "@saggitace/common-app";
import { verify } from "hono/jwt";




export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const parsed = signupInput.safeParse(body);

    if (!parsed.success) {
        console.log('Validation error:', parsed.error);
        c.status(400);  // Bad Request
        return c.json({
            message: "Inputs not correct",
            error: parsed.error.errors
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        });
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET);

        return c.text(jwt);
    } catch (e) {
        console.log('Database error:', e);
        c.status(500);  // Internal Server Error
        return c.text('Internal Server Error');
    }
});

userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const parsed = signinInput.safeParse(body);

    if (!parsed.success) {
        console.log('Validation error:', parsed.error);
        c.status(400);  // Bad Request
        return c.json({
            message: "Inputs not correct",
            error: parsed.error.errors
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            }
        });
        if (!user) {
            c.status(403);  // Forbidden
            return c.json({
                message: "Incorrect credentials"
            });
        }
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET);

        return c.text(jwt);
    } catch (e) {
        console.log('Database error:', e);
        c.status(500);  // Internal Server Error
        return c.text('Internal Server Error');
    }
});


