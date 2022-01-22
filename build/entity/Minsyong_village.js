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
exports.Minsyong_village = void 0;
var typeorm_1 = require("typeorm");
var geojson_1 = require("geojson");
var Minsyong_village = /** @class */ (function () {
    function Minsyong_village() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Minsyong_village.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "VILLCODE", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "COUNTYNAME", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "TOWNNAME", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "VILLNAME", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "VILLENG", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "COUNTYID", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "COUNTYCODE", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "TOWNID", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "TOWNCODE", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_village.prototype, "NOTE", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'geometry' }),
        __metadata("design:type", typeof (_a = typeof geojson_1.MultiPolygon !== "undefined" && geojson_1.MultiPolygon) === "function" ? _a : Object)
    ], Minsyong_village.prototype, "geom", void 0);
    Minsyong_village = __decorate([
        (0, typeorm_1.Entity)()
    ], Minsyong_village);
    return Minsyong_village;
}());
exports.Minsyong_village = Minsyong_village;
