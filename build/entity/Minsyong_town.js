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
exports.Minsyong_town = void 0;
var typeorm_1 = require("typeorm");
var geojson_1 = require("geojson");
var Minsyong_town = /** @class */ (function () {
    function Minsyong_town() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Minsyong_town.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_town.prototype, "COUNTYNAME", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_town.prototype, "TOWNNAME", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_town.prototype, "COUNTYID", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_town.prototype, "COUNTYCODE", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Minsyong_town.prototype, "TOWNID", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_town.prototype, "TOWNCODE", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'geometry' }),
        __metadata("design:type", typeof (_a = typeof geojson_1.MultiPolygon !== "undefined" && geojson_1.MultiPolygon) === "function" ? _a : Object)
    ], Minsyong_town.prototype, "geom", void 0);
    Minsyong_town = __decorate([
        (0, typeorm_1.Entity)()
    ], Minsyong_town);
    return Minsyong_town;
}());
exports.Minsyong_town = Minsyong_town;
