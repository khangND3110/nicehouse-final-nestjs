import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { JwtPayload } from "src/jwt/auth.payload";
import { mkdirsSync } from 'fs-extra';
import { diskStorage } from 'multer';

export const UploadUserImage: MulterOptions = {
    storage: diskStorage({
        destination: (req: Express.Request, file, cb) => {
            const user = req.user as JwtPayload;
            const path = `./uploads/user-image/${user.id}/`;
            mkdirsSync(path);
            cb(null, path);
        },
        filename: (req, file, cb) => {
            console.log('upload request', req);
            cb(null, `${file.originalname}`);
        },
    }),
    fileFilter: (req: Request, file, cb) => {
        const ext = file.mimetype;
        if (
            ext == 'image/jpeg' ||
            ext == 'image/png'
        ) {
            return cb(null, true);
        }
        return cb(new Error('Extension not allowed'), false);
    },
};

export const UploadApartmentImage: MulterOptions = {
    storage: diskStorage({
        destination: (req: Express.Request, file, cb) => {
            const user = req.user as JwtPayload;
            const path = `./uploads/apartment-image/${user.id}/`;
            mkdirsSync(path);
            cb(null, path);
        },
        filename: (req, file, cb) => {
            console.log('upload request', req);
            cb(null, `${file.originalname}`);
        },
    }),
    fileFilter: (req: Request, file, cb) => {
        const ext = file.mimetype;
        if (
            ext == 'image/jpeg' ||
            ext == 'image/png'
        ) {
            return cb(null, true);
        }
        return cb(new Error('Extension not allowed'), false);
    },
};

export const UploadReviewImage: MulterOptions = {
    storage: diskStorage({
        destination: (req: Express.Request, file, cb) => {
            const user = req.user as JwtPayload;
            const path = `./uploads/review-image/${user.id}/`;
            mkdirsSync(path);
            cb(null, path);
        },
        filename: (req, file, cb) => {
            console.log('upload request', req);
            cb(null, `${file.originalname}`);
        },
    }),
    fileFilter: (req: Request, file, cb) => {
        const ext = file.mimetype;
        if (
            ext == 'image/jpeg' ||
            ext == 'image/png'
        ) {
            return cb(null, true);
        }
        return cb(new Error('Extension not allowed'), false);
    },
};
