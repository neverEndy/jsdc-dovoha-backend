"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Southeastasia = void 0;
var typeorm_1 = require("typeorm");
var geojson_1 = require("geojson");
var Southeastasia = /** @class */ (function () {
    function Southeastasia() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Southeastasia.prototype, "id_0", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Southeastasia.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "country", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Southeastasia.prototype, "lon", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Southeastasia.prototype, "lat", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "posInfo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "openHours", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "offDay", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "food", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Southeastasia.prototype, "note", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'geometry' }),
        __metadata("design:type", typeof (_a = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _a : Object)
    ], Southeastasia.prototype, "geom", void 0);
    Southeastasia = __decorate([
        (0, typeorm_1.Entity)()
    ], Southeastasia);
    return Southeastasia;
}());
exports.Southeastasia = Southeastasia;
